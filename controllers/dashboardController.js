app.controller('dashboardController', function ($scope, $http,$timeout) {
    $timeout(function(){
        document.getElementById('loader').style.display="none"
        document.getElementById('myDiv').style.display="block"
    },5000)
    $scope.result = [];
   $scope.custName= window.localStorage.getItem("custName");
    $scope.querySpec = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": ""
            },
            "ctorMsg": {
                "function": "query",
                "args": []
            },
            "secureContext": ""
        },
        "id": 0
    }

    $scope.creditInvoke = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": ""
            },
            "ctorMsg": {
                "function": "credit",
                "args": []
            },
            "secureContext": ""
        },
        "id": 0
    }

    $scope.debitInvoke = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": ""
            },
            "ctorMsg": {
                "function": "debit",
                "args": []
            },
            "secureContext": ""
        },
        "id": 0
    }
    $scope.updateAddressInvoke = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": ""
            },
            "ctorMsg": {
                "function": "updateAddress",
                "args": []
            },
            "secureContext": ""
        },
        "id": 0
    }

    $scope.checkBal = function (peer) {
        $scope.result = [];
        $scope.querySpec.params.chaincodeID.name = window.localStorage.getItem("chaincodeid");
        $scope.querySpec.params.ctorMsg.args = [window.localStorage.getItem("custName")];
        $scope.querySpec.params.ctorMsg.args.push("Balance")

        var url;
        switch (peer) {
            case 0:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp0.us.blockchain.ibm.com:5003';
                $scope.querySpec.params.secureContext = "user_type1_" + peer;
                break;
            case 1:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp1.us.blockchain.ibm.com:5003';
                $scope.querySpec.params.secureContext = "user_type1_" + peer;
                break;
            case 2:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp2.us.blockchain.ibm.com:5003';
                $scope.querySpec.params.secureContext = "user_type1_" + peer;
                break;
            case 3:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp3.us.blockchain.ibm.com:5003';
                $scope.querySpec.params.secureContext = "user_type1_" + peer;
                break;

        }
        $http.post(url + '/chaincode', $scope.querySpec).then(function (response) {
            if (response.status === 200) {
                $scope.result[peer] = response.data.result.message;
            }
            return response;
        }, function (response) {
            return response.status
        });
    }

     $scope.credit = function (peer) {
        $scope.result = [];
         $scope.creditInvoke.params.chaincodeID.name = window.localStorage.getItem("chaincodeid");
         $scope.creditInvoke.params.ctorMsg.args = [window.localStorage.getItem("custName")];
         $scope.creditInvoke.params.ctorMsg.args.push($scope.creditAmount.value[peer])
        var url;
         switch (peer) {
            case 0:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp0.us.blockchain.ibm.com:5003';
                $scope.creditInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 1:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp1.us.blockchain.ibm.com:5003';
                $scope.creditInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 2:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp2.us.blockchain.ibm.com:5003';
                $scope.creditInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 3:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp3.us.blockchain.ibm.com:5003';
                $scope.creditInvoke.params.secureContext = "user_type1_" + peer;
                break;

        }
        $http.post(url + '/chaincode', $scope.creditInvoke).then(function (response) {
            if (response.status === 200) {
                  $scope.result[peer] = "Transaction successfull!";
            }
            return response;
        }, function (response) {
            return response.status
        });
     }

 $scope.debit = function (peer) {
         $scope.result = [];
         $scope.debitInvoke.params.chaincodeID.name = window.localStorage.getItem("chaincodeid");
         $scope.debitInvoke.params.ctorMsg.args = [window.localStorage.getItem("custName")];
          $scope.debitInvoke.params.ctorMsg.args.push($scope.debitAmount.value[peer])
        var url;
        switch (peer) {
            case 0:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp0.us.blockchain.ibm.com:5003';
                $scope.debitInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 1:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp1.us.blockchain.ibm.com:5003';
                $scope.debitInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 2:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp2.us.blockchain.ibm.com:5003';
                $scope.debitInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 3:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp3.us.blockchain.ibm.com:5003';
                $scope.debitInvoke.params.secureContext = "user_type1_" + peer;
                break;

        }
        $http.post(url + '/chaincode', $scope.debitInvoke).then(function (response) {
            if (response.status === 200) {
                $scope.result[peer] = "Transaction successfull!";
            }
            return response;
        }, function (response) {
            return response.status
        });
     }

     $scope.checkAddress = function(peer){
        $scope.result = [];
        $scope.querySpec.params.chaincodeID.name = window.localStorage.getItem("chaincodeid");
        $scope.querySpec.params.ctorMsg.args = [window.localStorage.getItem("custName")];
         $scope.querySpec.params.ctorMsg.args.push("Address")

        var url;
        switch (peer) {
            case 0:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp0.us.blockchain.ibm.com:5003';
                $scope.querySpec.params.secureContext = "user_type1_" + peer;
                break;
            case 1:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp1.us.blockchain.ibm.com:5003';
                $scope.querySpec.params.secureContext = "user_type1_" + peer;
                break;
            case 2:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp2.us.blockchain.ibm.com:5003';
                $scope.querySpec.params.secureContext = "user_type1_" + peer;
                break;
            case 3:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp3.us.blockchain.ibm.com:5003';
                $scope.querySpec.params.secureContext = "user_type1_" + peer;
                break;

        }
        $http.post(url + '/chaincode', $scope.querySpec).then(function (response) {
            if (response.status === 200) {
                $scope.result[peer] = response.data.result.message;
            }
            return response;
        }, function (response) {
            return response.status
        });

     }
     
     $scope.updateAddress = function (peer) {
        $scope.result = [];
         $scope.updateAddressInvoke.params.chaincodeID.name = window.localStorage.getItem("chaincodeid");
         $scope.updateAddressInvoke.params.ctorMsg.args = [window.localStorage.getItem("custName")];
         $scope.updateAddressInvoke.params.ctorMsg.args.push($scope.address[peer])
        var url;
         switch (peer) {
            case 0:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp0.us.blockchain.ibm.com:5003';
                $scope.updateAddressInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 1:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp1.us.blockchain.ibm.com:5003';
                $scope.updateAddressInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 2:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp2.us.blockchain.ibm.com:5003';
                $scope.updateAddressInvoke.params.secureContext = "user_type1_" + peer;
                break;
            case 3:
                url = 'https://f48a4804199c419aa3641b46e94e2dac-vp3.us.blockchain.ibm.com:5003';
                $scope.updateAddressInvoke.params.secureContext = "user_type1_" + peer;
                break;

        }
        $http.post(url + '/chaincode', $scope.updateAddressInvoke).then(function (response) {
            if (response.status === 200) {
                  $scope.result[peer] = "Update successfull!";
            }
            return response;
        }, function (response) {
            return response.status
        });
     }
})