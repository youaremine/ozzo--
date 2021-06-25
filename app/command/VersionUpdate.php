<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------


namespace app\command;


use think\console\Command;
use think\console\Input;
use think\console\input\Option;
use think\console\Output;
use think\Exception;
use think\facade\Db;

class VersionUpdate extends Command
{
    protected function configure()
    {
        $this->setName('version:update')
            ->setDescription('crmeb_merchant 版本更新命令')
            ->addOption('package', 'p', Option::VALUE_REQUIRED, '指定更新包的路径');
    }

    protected function execute(Input $input, Output $output)
    {
        $flag = $output->confirm($input, '更新之前请务必做好数据库和代码的备份,防止数据或代码在更新中被覆盖 !!!', false);
        if (!$flag) return;
        $flag = $output->confirm($input, '请确保swoole服务和队列服务已关闭,防止意外报错', false);
        if (!$flag) return;

        $version = str_replace('CRMEB-MERCHANT-v', '', get_crmeb_version('no'));
        ini_set('memory_limit', '-1');
        set_time_limit(0);

        $packagePath = $input->getOption('package') ?: 'auto_update.zip';
        $updateFilePath = app()->getRootPath() . ltrim($packagePath, '/= ');
        $updatePath = dirname($updateFilePath);
        $unzipPath = $updatePath . '/_update_runtime_' . str_replace('.', '_', $version);
        if (!is_file($updateFilePath)) {
            $output->warning($updateFilePath . ' 更新包不存在');
            return;
        }
        $zip = new \ZipArchive();
        if ($zip->open($updateFilePath) === true) {
            $zip->extractTo($unzipPath);
            $zip->close();
        } else {
            $output->warning($updateFilePath . ' 更新包打开失败');
            return;
        }

        $unlink = function () use ($unzipPath) {
            @unlink($unzipPath . '/update.sql');
            @unlink($unzipPath . '/update.zip');
            @unlink($unzipPath . '/.env');
            @rmdir($unzipPath);
        };

        if (!is_file($unzipPath . '/.env')) {
            $output->warning('文件不完整');
            $unlink();
            return;
        }

        $env = parse_ini_file($unzipPath . '/.env', true) ?: [];
        if (($env['NAME'] ?? '') !== 'CRMEB-MERCHANT' || ((($env['TYPE'] ?? '') === 'MODEL' && ($env['VERSION'] ?? '') !== $version) || (($env['OLD_VERSION'] ?? '') && ($env['OLD_VERSION'] ?? '') !== $version))) {
            $output->warning('版本号对比失败,请检查当前版本号(.version/更新包)是否被修改');
            $unlink();
            return;
        }

        if (is_file($unzipPath . '/update.sql')) {
            $str = preg_replace('/--.*/i', '', file_get_contents($unzipPath . '/update.sql'));
            $str = preg_replace('/\/\*.*\*\/(\;)?/i', '', $str);
            $sqlList = explode(";\n", $str);
        } else {
            $sqlList = [];
        }

        $output->info('开始更新');
        try {
            Db::transaction(function () use ($output, $unzipPath, $sqlList) {
                foreach ($sqlList as $sql) {
                    $sql = trim($sql, " \xEF\xBB\xBF\r\n");
                    if (!$sql) continue;
                    Db::query($sql . ';');
                }
                if (count($sqlList)) {
                    $output->info('数据库更新成功');
                }
                $zip = new \ZipArchive();
                if ($zip->open($unzipPath . '/update.zip') === true) {
                    $zip->extractTo(app()->getRootPath());
                    $zip->close();
                } else {
                    throw new Exception('更新文件覆盖失败');
                }
            });
        } catch (\Throwable $e) {
            $output->warning('更新失败:' . $e->getMessage());
            $unlink();
            return;
        }

        $unlink();
        $output->info('版本更新成功, 请重启swoole服务和队列服务');

        update_crmeb_compiled();
    }

}