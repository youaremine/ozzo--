<?php

return [
    'WEB_APP' =>[
        'PROD' => [
            'publicKey' => "<<<PK
-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA9k6Dpk12XPGBuqCKI3HERkeEU0MCBC/h/Ox1mVDuwRVngZvuYDHUxbl5Yup9yNvOFK9Xabqy3D2DX7Q9fIZqhLHAYvLMDTSuSAEza6dW6kfUzNaCnucvRpDgNKbBcxa/EA5LWyrpNaMwRLbaGe4s/l7+o0mRwCEjgEU7dzjaWVtWLH66dzTcB+LIEiwx/nYl69jaDpXEtxMYLZyQeibYRv0Gnaclu3trhe+0GYMT65DXv0aSDDxUsUhs4hL6S6j4646aZ5Yl2nukPZXUalJgv+sOm1IHLrf6Hv8LH4OqA8Vh1uQC65QHRqlwzrypxWY7nGY/40HH2rGLHjgI+Rqhwyu8v3dLHEGBoeupCcvAK9PxPSK2iU0RA/Stk5Wf2XG8m1VDLsZ1usBkdkKXyj60GZAGqN9RzwLH42whOS6Z/JN4HP7O9eUVH+qQ7yVumGH3huW5nvX0St9AFZ7kLUv8RDS6rb4zDvZiTIosGVXIt0GC9cAWEqhh7SZXHEi0CF792qJRhiZTlOS0FPFzJ4tw0sBgF61iqAD3+l9WVE4q+mhJlU4jjt10JGyl08D/7/lnD1QelP3/il3iTyMRNAmLY9PY+AuXo81AdNr1wypB+KEj4A9WyuH739yQnSURPT8fVDC5zcqv97TI72iqCLpkDr+oP3gZX4hZ8Fj3F5MrKaECAwEAAQ==
-----END PUBLIC KEY-----
PK",
            'apiKey' => '1FY+RVGsfCGECDmq7OEFxoUVlCqqGe/o1cN7MZWBJQ8jENVlEhQTaub39J2sjLew5U3Zdr/o64gfNF4OrbWq2A==',
            'appId' => '7040902579',
            'queryTxnUrl' => 'https://gateway2.tapngo.com.hk/paymentApi/payment/status',
            'paymentUrl' => 'https://gateway2.tapngo.com.hk/web/payments',
            "recurrentPaymentUrl" => "https://gateway2.tapngo.com.hk/paymentApi/payment/recurrent", //Recurrent Payment URL
            "invalidateTokenUrl" => "https://gateway2.tapngo.com.hk/paymentApi/payment/recurrent/token/invalidation", //Invalidate Recurrent Toke
            "notifyUrl" => '/testWeb/test_notify.php', // Notify URL - Call after paid by Tap & Go by PSG
            "returnUrl" => '/testWeb/test_return.php', // Return URL - Call after paid by Tap & Go or timeout
            "protocol" => 'http',

        ],
        'UAT' => [

        ],
    ],
    'FPS_A2A' =>[
        'PROD' => [

        ],
        'UAT' => [

        ],
    ]
];