ALTER TABLE `eb_merchant`
ADD COLUMN `mer_money` decimal(8, 2) NOT NULL DEFAULT 0 COMMENT '商户余额' AFTER `copy_product_num`,
ADD COLUMN `financial_bank` varchar(255) NULL COMMENT '银行卡转账信息' AFTER `mer_money`,
ADD COLUMN `financial_wechat` varchar(255) NULL COMMENT '微信转账信息' AFTER `financial_bank`,
ADD COLUMN `financial_alipay` varchar(255) NULL COMMENT '支付宝转账信息' AFTER `financial_wechat`,
ADD COLUMN `financial_type` tinyint(2) UNSIGNED NULL DEFAULT 1 COMMENT '默认使用类型' AFTER `financial_alipay`;

ALTER TABLE `eb_excel` ADD COLUMN `message` varchar(255) NULL AFTER `create_time`;
ALTER TABLE `eb_store_group_order` ADD INDEX `create_time`(`create_time`, `paid`) USING BTREE;
ALTER TABLE `eb_user` ADD COLUMN `spread_limit` timestamp NULL COMMENT '推广员到期时间' AFTER `spread_time`;
ALTER TABLE `eb_financial_record` ADD COLUMN `type` tinyint(1) NOT NULL DEFAULT -1 COMMENT '0:商户  1:公共  2:平台' AFTER `number`;

ALTER TABLE `eb_store_order` ADD COLUMN `is_selfbuy` tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否为自购' AFTER `pay_postage`;
ALTER TABLE `eb_store_order` MODIFY COLUMN `pay_type` tinyint(1) NOT NULL COMMENT '支付方式 0余额 1微信 2小程序 3 h5  4支付宝 5 支付宝扫码 6 微信扫码' AFTER `pay_time`;
ALTER TABLE `eb_store_product_group` MODIFY COLUMN `status` int(11) NULL DEFAULT 0 COMMENT '平台控制状态' AFTER `once_pay_count`;
ALTER TABLE `eb_store_spu` MODIFY COLUMN `star` int(11) NULL DEFAULT 1 COMMENT '星级' AFTER `sort`;
ALTER TABLE `eb_user_history` MODIFY COLUMN `res_id` int(11) UNSIGNED NULL DEFAULT NULL COMMENT '历史记录对象的ID' AFTER `user_history_id`;
ALTER TABLE `eb_user_history` MODIFY COLUMN `res_type` int(11) NULL DEFAULT NULL COMMENT '历史记录类型' AFTER `res_id`;
ALTER TABLE `eb_user_history` MODIFY COLUMN `uid` int(11) NULL DEFAULT NULL AFTER `res_type`;
ALTER TABLE `eb_store_product` MODIFY COLUMN `rate` decimal(2, 1) NULL DEFAULT 3 COMMENT '评价分数' AFTER `refusal`;

CREATE TABLE `eb_store_import` (
  `import_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `import_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'delivery发货单',
  `count` int(11) DEFAULT NULL COMMENT '总数',
  `success` int(11) DEFAULT NULL COMMENT '成功数',
  `status` int(2) DEFAULT '0' COMMENT '0.处理中，1成功，10部分完成，-1失败',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `mer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`import_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='导入批次记录';

CREATE TABLE `eb_store_import_delivery` (
  `import_delivery_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `import_id` int(10) unsigned NOT NULL,
  `order_sn` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '订单sn',
  `delivery_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '快递公司',
  `delivery_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '快递单号',
  `status` tinyint(2) DEFAULT NULL COMMENT '状态',
  `mark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '备注',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `mer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`import_delivery_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='导入发货单详细记录';

CREATE TABLE `eb_financial` (
  `financial_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `financial_sn` varchar(32) NOT NULL COMMENT '单号',
  `mer_money` decimal(8,2) unsigned NOT NULL COMMENT '余额',
  `extract_money` decimal(8,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '提现金额',
  `financial_type` int(11) unsigned DEFAULT '0' COMMENT '收款类型',
  `financial_account` varchar(500) NOT NULL COMMENT '商户账户信息',
  `financial_status` int(11) unsigned DEFAULT '0' COMMENT '转账状态',
  `status` int(10) NOT NULL COMMENT '审核0待审核，1通过 ，-1 未通过',
  `refusal` varchar(32) NOT NULL COMMENT '拒绝理由',
  `mer_id` int(11) unsigned NOT NULL COMMENT '商户 id',
  `image` varchar(1000) DEFAULT NULL COMMENT '凭证',
  `admin_id` int(11) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `status_time` timestamp NULL DEFAULT NULL COMMENT '审核时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '修改拼凭证时间',
  `is_del` int(11) unsigned DEFAULT '0',
  `mark` varchar(255) DEFAULT NULL COMMENT '商户备注',
  `admin_mark` varchar(255) DEFAULT NULL COMMENT '平台备注',
  `mer_admin_id` int(11) DEFAULT NULL COMMENT '商户管理员',
  PRIMARY KEY (`financial_id`) USING BTREE,
  KEY `mer_id` (`mer_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='商户财务申请提现';

DELETE FROM `eb_system_config` WHERE `config_id` = 221;
DELETE FROM `eb_system_config` WHERE `config_id` = 222;
DELETE FROM `eb_system_config` WHERE `config_id` = 223;
DELETE FROM `eb_system_config` WHERE `config_id` = 224;
INSERT INTO `eb_system_config`(`config_id`, `config_classify_id`, `config_name`, `config_key`, `config_type`, `config_rule`, `required`, `info`, `sort`, `user_type`, `status`, `create_time`) VALUES (324, 55, '商户最低提现金额', 'extract_minimum_line', 'number', '', 0, '指商户的余额至少大于该金额部分，才可以提现，设置为0时默认商户余额可以全部提现', 0, 0, 1, '2021-03-19 11:54:55');
INSERT INTO `eb_system_config`(`config_id`, `config_classify_id`, `config_name`, `config_key`, `config_type`, `config_rule`, `required`, `info`, `sort`, `user_type`, `status`, `create_time`) VALUES (325, 55, '商户每笔最小提现额度', 'extract_minimum_num', 'number', '', 0, '指商户的每次申请转账最小的金额；设置为0时默认不限制最小额度', 0, 0, 1, '2021-03-19 11:55:46');
INSERT INTO `eb_system_config`(`config_id`, `config_classify_id`, `config_name`, `config_key`, `config_type`, `config_rule`, `required`, `info`, `sort`, `user_type`, `status`, `create_time`) VALUES (327, 55, '商户每笔最高提现金额', 'extract_maxmum_num', 'number', '', 0, '商户每次提现申请的最高额度，设置0时默认不限制', 0, 0, 1, '2021-04-21 17:46:39');
INSERT INTO `eb_system_config`(`config_id`, `config_classify_id`, `config_name`, `config_key`, `config_type`, `config_rule`, `required`, `info`, `sort`, `user_type`, `status`, `create_time`) VALUES (329, 32, '客服电话', 'sys_phone', 'input', '', 0, '平台客服电话', 0, 0, 1, '2021-05-08 09:33:03');
INSERT INTO `eb_system_config_classify`(`config_classify_id`, `pid`, `classify_name`, `classify_key`, `info`, `sort`, `create_time`, `icon`, `status`) VALUES (55, 0, '商户财务', 'financial', '财务提现等配置', 0, '2021-03-19 11:52:56', '', 1);

INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1177, 515, '/515/', '', '转账记录', '/accounts/transferRecord', '[]', 0, 1, 0, 1, '2021-04-28 14:40:37', '2021-04-28 14:50:24');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1178, 515, '/515/', '', '账单管理', '/accounts/statement', '[]', 0, 1, 0, 1, '2021-04-28 14:41:20', '2021-04-28 14:46:40');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1179, 515, '/515/', '', '转账设置', '/accounts/setting', '[]', 0, 1, 0, 1, '2021-04-28 14:47:57', '2021-04-28 14:55:31');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1181, 525, '525/', '', '转账记录', '/accounts/transManagement', '[]', 0, 1, 1, 1, '2021-04-28 14:52:26', '2021-04-28 14:52:26');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1182, 525, '525/', '', '收款方式', '/accounts/payType', '[]', 0, 1, 1, 1, '2021-04-28 14:54:15', '2021-04-28 14:54:15');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1183, 525, '525/', '', '账单管理', '/accounts/statement', '[]', 0, 1, 1, 1, '2021-04-28 14:54:40', '2021-04-28 14:54:40');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1184, 1177, '/515/1177/', '', '权限', '/', '', 1, 0, 0, 0, '2021-04-28 15:01:49', '2021-04-28 15:29:20');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1185, 1230, '/515/1178/1230/', '', '列表', 'systemFinancialRecordLst', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:31:12');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1186, 1230, '/515/1178/1230/', '', '头部统计', 'systemFinancialRecordTitle', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:32:47');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1187, 1230, '/515/1178/1230/', '', '详情', 'systemFinancialRecordDetail', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:32:39');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1188, 1230, '/515/1178/1230/', '', '导出详情', 'systemFinancialRecordDetailExport', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:32:28');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1189, 1184, '/515/1177/1184/', '', '列表', 'systemFinancialList', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:29:19');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1190, 1184, '/515/1177/1184/', '', '详情', 'systemFinancialDetail', '', 1, 1, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:29:19');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1191, 1184, '/515/1177/1184/', '', '编辑', 'systemFinancialUpdate', '', 1, 1, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:29:19');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1192, 1184, '/515/1177/1184/', '', '审核', 'systemFinancialSwitchStatus', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:29:19');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1193, 1184, '/515/1177/1184/', '', '备注Form', 'systemFinancialMarkForm', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:29:19');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1194, 1184, '/515/1177/1184/', '', '备注', 'systemFinancialMark', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:29:19');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1195, 1184, '/515/1177/1184/', '', '头部统计', 'systemFinancialTitle', '', 1, 0, 0, 0, '2021-04-28 15:01:51', '2021-04-28 15:29:19');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1197, 1181, '1181/', '', '权限', '/', '', 1, 0, 1, 0, '2021-04-28 15:02:10', '2021-04-28 15:23:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1198, 0, '/', '', '组合数据编辑', 'mer/group', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-05-08 11:45:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1199, 624, '624/', '', '快递公司对照表', 'merchantStoreExcelDownloadExpress', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:35:48');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1200, 1198, '1198/', '', '详情', 'merchantGroupDetail', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:36:08');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1201, 624, '624/', '', '批量导入发货单', 'merchantStoreOrderDeliveryImport', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:09:58');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1202, 624, '624/', '', '导入记录列表', 'merchantStoreOrderDeliveryImportLst', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:10:06');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1203, 624, '624/', '', '导入详情', 'merchantStoreOrderDeliveryImportDetail', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:10:13');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1204, 624, '624/', '', '生成导出记录', 'merchantStoreOrderDeliveryImportExcel', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:10:19');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1205, 624, '624/', '', '生成导出发货单', 'merchantStoreOrderDeliveryExport', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:09:49');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1206, 1228, '1228/', '', '列表', 'merchantFinanciaRecordlLst', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:26:20');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1207, 1228, '1228/', '', '头部统计', 'merchantFinancialTitle', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:26:20');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1208, 1228, '1228/', '', '详情', 'merchantFinancialRecordDetail', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:26:21');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1209, 1228, '1228/', '', '导出详情', 'merchantFinancialRecordDetailExport', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:26:45');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1210, 1197, '1197/', '', '列表', 'merchantFinancialLst', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:22:52');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1211, 1227, '1227/', '', '收款方式Form', 'merchantFinancialAccountForm', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:15:10');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1212, 1227, '1227/', '', '收款方式保存', 'merchantFinancialAccountSave', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:15:37');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1213, 1197, '1181/1197/', '', '详情', 'merchantFinancialDetail', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:23:10');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1214, 1197, '1181/1197/', '', '添加表单', 'merchantFinancialCreateForm', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:23:10');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1215, 1197, '1181/1197/', '', '添加', 'merchantFinancialCreateSave', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:23:10');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1216, 1197, '1181/1197/', '', '删除', 'merchantFinancialDelete', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:23:10');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1217, 1197, '1181/1197/', '', '备注Form', 'merchantFinancialMarkForm', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:23:10');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1218, 1197, '1181/1197/', '', '备注保存', 'merchantFinancialMark', '', 1, 0, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:23:10');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1219, 1198, '/1198/', '', '列表', 'merchantGroupDataLst', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:02:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1220, 1198, '/1198/', '', '添加表单', 'merchantGroupDataCreateForm', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:02:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1221, 1198, '/1198/', '', '添加', 'merchantGroupDataCreate', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:02:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1222, 1198, '/1198/', '', '编辑表单', 'merchantGroupDataUpdateForm', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:02:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1223, 1198, '/1198/', '', '编辑', 'merchantGroupDataUpdate', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:02:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1224, 1198, '/1198/', '', '删除', 'merchantGroupDataDelete', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:02:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1225, 1198, '/1198/', '', '编辑状态', 'merchantGroupDataChangeStatus', '', 1, 1, 1, 0, '2021-04-28 15:02:11', '2021-04-28 15:02:11');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1226, 0, '/', 'files', '导出文件', '/export/list', '[]', 0, 1, 1, 1, '2021-04-28 15:05:44', '2021-04-29 15:43:01');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1227, 1182, '1182/', '', '权限', '/', '', 0, 0, 1, 0, '2021-04-28 15:14:54', '2021-04-28 15:14:54');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1228, 1183, '1183/', '', '权限', '/', '', 0, 0, 1, 0, '2021-04-28 15:23:44', '2021-04-28 15:25:47');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1230, 1178, '/515/1178/', '', '权限', '/', '', 0, 0, 0, 0, '2021-04-28 15:30:56', '2021-04-28 15:30:56');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1231, 906, '/515/791/906/', '', '头部数据', 'systemFinancialCount', '', 1, 0, 0, 0, '2021-05-08 09:51:43', '2021-05-08 10:43:03');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1232, 902, '902/', '', '头部统计', 'merchantFinancialCount', '', 1, 0, 1, 0, '2021-05-08 09:52:02', '2021-05-08 10:43:51');
INSERT INTO `eb_system_menu`(`menu_id`, `pid`, `path`, `icon`, `menu_name`, `route`, `params`, `sort`, `is_show`, `is_mer`, `is_menu`, `create_time`, `update_time`) VALUES (1244, 520, '/520/', '', '导出记录', '/group/exportList', '[]', 0, 1, 0, 1, '2021-05-10 15:11:08', '2021-05-10 15:13:20');
UPDATE `eb_system_menu` SET `pid` = 0, `path` = '/', `icon` = 's-order', `menu_name` = '订单', `route` = '/order', `params` = '[]', `sort` = 99, `is_show` = 1, `is_mer` = 1, `is_menu` = 1, `create_time` = '2020-06-10 18:19:27', `update_time` = '2021-03-26 10:21:34' WHERE `menu_id` = 512;
UPDATE `eb_system_menu` SET `pid` = 515, `path` = '/515/', `icon` = '', `menu_name` = '财务对账', `route` = '/accounts/reconciliation', `params` = '[]', `sort` = 0, `is_show` = 0, `is_mer` = 0, `is_menu` = 1, `create_time` = '2020-06-16 10:52:28', `update_time` = '2021-04-28 14:43:58' WHERE `menu_id` = 518;
UPDATE `eb_system_menu` SET `pid` = 515, `path` = '/515/', `icon` = '', `menu_name` = '财务记录', `route` = '/accounts/record', `params` = '[]', `sort` = 0, `is_show` = 1, `is_mer` = 0, `is_menu` = 1, `create_time` = '2020-06-24 11:10:22', `update_time` = '2021-04-29 16:07:52' WHERE `menu_id` = 537;
UPDATE `eb_system_menu` SET `pid` = 525, `path` = '/525/', `icon` = '', `menu_name` = '财务对账', `route` = '/accounts/reconciliation', `params` = '[]', `sort` = 0, `is_show` = 0, `is_mer` = 1, `is_menu` = 1, `create_time` = '2020-06-28 11:22:21', `update_time` = '2021-04-28 14:57:01' WHERE `menu_id` = 543;
UPDATE `eb_system_menu` SET `pid` = 909, `path` = '1226/909/', `icon` = '', `menu_name` = '导出文件列表', `route` = 'merchantStoreExcelLst', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 1, `is_menu` = 0, `create_time` = '2020-08-18 14:36:14', `update_time` = '2021-04-28 15:18:22' WHERE `menu_id` = 862;
UPDATE `eb_system_menu` SET `pid` = 909, `path` = '1226/909/', `icon` = '', `menu_name` = '导出文件下载', `route` = 'merchantStoreExcelDownload', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 1, `is_menu` = 0, `create_time` = '2020-08-18 14:36:14', `update_time` = '2021-04-28 15:18:22' WHERE `menu_id` = 863;
UPDATE `eb_system_menu` SET `pid` = 1226, `path` = '1226/', `icon` = '', `menu_name` = '权限', `route` = '/', `params` = '', `sort` = 0, `is_show` = 0, `is_mer` = 1, `is_menu` = 0, `create_time` = '2020-08-18 16:48:58', `update_time` = '2021-04-28 15:18:22' WHERE `menu_id` = 909;
UPDATE `eb_system_menu` SET `pid` = 1093, `path` = '/719/1051/1095/1093/', `icon` = '', `menu_name` = '商品列表', `route` = 'systemStoreProductAssistLst', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 0, `is_menu` = 0, `create_time` = '2020-11-06 10:29:31', `update_time` = '2020-12-03 10:00:22' WHERE `menu_id` = 1035;
UPDATE `eb_system_menu` SET `pid` = 1093, `path` = '/719/1051/1095/1093/', `icon` = '', `menu_name` = '显示', `route` = 'systemStoreProductAssistShow', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 0, `is_menu` = 0, `create_time` = '2020-11-06 10:39:30', `update_time` = '2020-12-03 10:00:22' WHERE `menu_id` = 1053;
UPDATE `eb_system_menu` SET `pid` = 1093, `path` = '/719/1051/1095/1093/', `icon` = '', `menu_name` = '详情', `route` = 'systemStoreProductAssistDetail', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 0, `is_menu` = 0, `create_time` = '2020-11-06 10:43:27', `update_time` = '2020-12-03 10:00:22' WHERE `menu_id` = 1062;
UPDATE `eb_system_menu` SET `pid` = 1093, `path` = '/719/1051/1095/1093/', `icon` = '', `menu_name` = '编辑', `route` = 'systemStoreProductAssistProductUpdate', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 0, `is_menu` = 0, `create_time` = '2020-11-06 10:45:47', `update_time` = '2020-12-03 10:00:22' WHERE `menu_id` = 1069;
UPDATE `eb_system_menu` SET `pid` = 1093, `path` = '/719/1051/1095/1093/', `icon` = '', `menu_name` = '审核', `route` = 'systemStoreProductAssistStatus', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 0, `is_menu` = 0, `create_time` = '2020-11-06 10:49:42', `update_time` = '2020-12-03 10:00:22' WHERE `menu_id` = 1076;
UPDATE `eb_system_menu` SET `pid` = 1093, `path` = '/719/1051/1095/1093/', `icon` = '', `menu_name` = '商品详情', `route` = 'systemStoreProductAssistGet', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 0, `is_menu` = 0, `create_time` = '2020-11-06 14:16:57', `update_time` = '2020-12-03 10:00:22' WHERE `menu_id` = 1087;
UPDATE `eb_system_menu` SET `pid` = 1095, `path` = '/719/1051/1095/', `icon` = '', `menu_name` = '权限', `route` = '/', `params` = '', `sort` = 0, `is_show` = 0, `is_mer` = 0, `is_menu` = 0, `create_time` = '2020-11-06 14:21:48', `update_time` = '2020-12-03 10:00:22' WHERE `menu_id` = 1093;
UPDATE `eb_system_menu` SET `pid` = 419, `path` = '419/', `icon` = '', `menu_name` = '编辑表单', `route` = 'merchantAttachmentUpdateForm', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 1, `is_menu` = 0, `create_time` = '2020-11-30 11:59:42', `update_time` = '2021-04-28 15:36:35' WHERE `menu_id` = 1123;
UPDATE `eb_system_menu` SET `pid` = 419, `path` = '419/', `icon` = '', `menu_name` = '编辑', `route` = 'merchantAttachmentUpdate', `params` = '', `sort` = 1, `is_show` = 0, `is_mer` = 1, `is_menu` = 0, `create_time` = '2020-11-30 11:59:42', `update_time` = '2021-04-28 15:36:42' WHERE `menu_id` = 1124;
UPDATE `eb_system_menu` SET `pid` = 107, `path` = '107/', `icon` = '', `menu_name` = '优惠券发送记录', `route` = '/marketing/coupon/send', `params` = '[]', `sort` = 0, `is_show` = 1, `is_mer` = 1, `is_menu` = 1, `create_time` = '2020-12-24 09:49:28', `update_time` = '2020-12-24 09:49:56' WHERE `menu_id` = 1132;
