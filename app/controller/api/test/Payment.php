<?php


namespace app\controller\api\test;
use think\facade\View;

use crmeb\basic\BaseController;
class Payment extends  BaseController
{
   public function stripe(){
       return View::fetch('index');
   }

}