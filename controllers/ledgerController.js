app.controller('ledgerController', function ($scope, $http) {
    $scope.submit = function (data) {
        //Invoke CC address
        $scope.deploySpec = {
            "jsonrpc": "2.0",
            "method": "deploy",
            "params": {
                "type": 1,
                "chaincodeID": {
                    "path": "https://github.com/nik0405/GlobalPayments1.1"
                },
                "ctorMsg": {
                    "function": "init",
                    "args": [
                        data.name,data.balance,data.address
                    ]
                },
                "secureContext": "user_type1_0"
            },
            "id": 0
        }
        $http.post(('http://f48a4804199c419aa3641b46e94e2dac-vp0.us.blockchain.ibm.com:5003/chaincode', $scope.deploySpec).then(function (response) {
                if(response.status===200){
                    window.localStorage.setItem("chaincodeid",response.data.result.message)
                    window.localStorage.setItem("custName",data.name)
                    window.location = '#!/dashboard'
                }
                return response;
            }, function (response) {
                return response.status
            }));

    }
});