<?php

namespace crmeb\tapgo\http;

class HttpRequest
{
    public function getRequest(){

    }
    public function postRequest($url = '',$array = []){
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,'https://gateway2.tapngo.com.hk/web/payments');

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);

        // POST数据

        curl_setopt($ch, CURLOPT_POST, 1);

        // 把post的变量加上

        $data['appId'] = $array['appId'];
        $data['merTradeNo'] = $array['merTradeNo'];
        $data['paymentType'] = $array['paymentType'];
        $data['transactionType'] = $array['transactionType'];
        $data['payload'] = $array['b64_encryptedWithPublic'];
        $data['sign'] = $array['sign'];
        $data['totalPrice'] = $array['totalPrice'];
        $data['remark'] = $array['remark'];
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

        $output = curl_exec($ch);

        curl_close($ch);

        echo json_encode($output);die;
    }
}