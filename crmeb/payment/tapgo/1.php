<?php
//include('_constant.php');
//Replace the below values for testing different merchant
//$apiKey = "e3Xc/5lSAip3FJ3tUAIbrEqe/vopONRe9xLeBG2CZQKqZzXOc1z4OpRz/989gVH0DWDHKp0+3fzZjo+De1Ny3A=="; //API Key
$apiKey = "1FY+RVGsfCGECDmq7OEFxoUVlCqqGe/o1cN7MZWBJQ8jENVlEhQTaub39J2sjLew5U3Zdr/o64gfNF4OrbWq2A==";
//API Key
//$appid = "4295949200"; //App ID
$appid = '7040902579'; //App ID
//$merTradeNo = "W84P0678404"; // Merchant Trade No
$merTradeNo = 'TEST20210602160329'; // Merchant Trade No
//$url = "https://gateway.sandbox.tapngo.com.hk/paymentApi/payment/status"; //URL
$url = 'https://gateway2.tapngo.com.hk/paymentApi/payment/status'; //URL
$timestamp = round(microtime(true) * 1000);
//echo $timestamp;
$payload = 'appId=' . $appid . '&merTradeNo=' . $merTradeNo . '&timestamp=' . $timestamp;
//echo "payload: " . $payload;
//echo "<br><br>";

// $sign=hash_hmac('sha512', $payload, $apiKey, true);
// $payload .= '&sign=' . base64_encode($sign);

// echo $timestamp . "\n";
// echo $payload. "\n";
// echo $sign. "\n";

//echo "payload: " . $payload;
//echo "<br><br>";
//echo "<br><br>";
$sign=base64_encode(hash_hmac('sha512', $payload, $apiKey, true));
$payload .= '&sign=' . $sign;
$curl = curl_init();
//Set Proxy Server (remove these two lines before sending to Merchant as an example)
// curl_setopt($curl, CURLOPT_PROXY, "http://proxy.pccw.com");
// curl_setopt($curl, CURLOPT_PROXYPORT, "8080");
//echo $url . "\n";
//var_dump($payload);
curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTPHEADER => array(
        "content-type: application/x-www-form-urlencoded",
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);
var_dump($response);
$a = simplexml_load_string($response);
$xmljson= json_encode($a);
$xmlarray=json_decode($xmljson,true);
var_dump($xmlarray);
curl_close($curl);


//if ($err) {
//    echo "cURL Error #:" . $err;
//} else {
//    var_dump($response);
//}
//echo "<br>Result:<br><textarea rows='20' cols='130'>";
//if ($err) {
//    echo "cURL Error #:" . $err;
//} else {
//    //var_dump($response);
//    echo str_replace("><",">\n<",$response);
//}
//echo "</textarea><br><br>";
?>