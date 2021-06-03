<?php
use GuzzleHttp\Exception\RequestException;
use WechatPay\GuzzleMiddleware\WechatPayMiddleware;
use WechatPay\GuzzleMiddleware\Util\PemUtil;

// 商户相关配置
$merchantId = '126125418'; // 商户号
$merchantSerialNumber = '76709B83E5A0494EA3F25ADBC38939778B7B94F2'; // 商户API证书序列号
$merchantPrivateKey = PemUtil::loadPrivateKey('./key/apiclient_key.pem'); // 商户私钥
// 微信支付平台配置
$wechatpayCertificate = PemUtil::loadCertificate('/key/wechatpay_447B76563F1BDE4DEAE64000D34758F4378542CC.pem'); // 微信支付平台证书

// 构造一个WechatPayMiddleware
$wechatpayMiddleware = WechatPayMiddleware::builder()
    ->withMerchant($merchantId, $merchantSerialNumber, $merchantPrivateKey) // 传入商户相关配置
    ->withWechatPay([ $wechatpayCertificate ]) // 可传入多个微信支付平台证书，参数类型为array
    ->build();

// 将WechatPayMiddleware添加到Guzzle的HandlerStack中
$stack = GuzzleHttp\HandlerStack::create();
$stack->push($wechatpayMiddleware, 'wechatpay');

// 创建Guzzle HTTP Client时，将HandlerStack传入
$client = new GuzzleHttp\Client(['handler' => $stack]);


// 接下来，正常使用Guzzle发起API请求，WechatPayMiddleware会自动地处理签名和验签
try {
//    $resp = $client->request('GET', 'https://api.mch.weixin.qq.com/v3/...', [ // 注意替换为实际URL
//        'headers' => [ 'Accept' => 'application/json' ]
//    ]);
//
//    echo $resp->getStatusCode().' '.$resp->getReasonPhrase()."\n";
//    echo $resp->getBody()."\n";

    $resp = $client->request('POST', 'https://api.mch.weixin.qq.com/hk/v3/transactions/app', [
        'json' => '{
            "mchid": "126125418",
            "appid": "wxcfd86c246a46ff84", 
            "description": "test",
            "notify_url": "https://www.weixin.qq.com/wxpay/pay.php",
            "out_trade_no": "1217752565643587573680189",
            "trade_type": "APP",
            "merchant_category_code": "7032",
            "amount": {
              "total": 100,
              "currency" : "HKD"
            }
        }',
        'headers' => [ 'Accept' => 'application/json' ]
    ]);

    echo $resp->getStatusCode().' '.$resp->getReasonPhrase()."\n";
    echo $resp->getBody()."\n";
} catch (RequestException $e) {
    // 进行错误处理
    echo $e->getMessage()."\n";
    if ($e->hasResponse()) {
        echo $e->getResponse()->getStatusCode().' '.$e->getResponse()->getReasonPhrase()."\n";
        echo $e->getResponse()->getBody();
    }
    return;
}