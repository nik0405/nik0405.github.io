app.controller('enrollController', function ($scope, $http, $q) {
   $scope.url = [
        "https://f48a4804199c419aa3641b46e94e2dac-vp0.us.blockchain.ibm.com:5003",
        "https://f48a4804199c419aa3641b46e94e2dac-vp1.us.blockchain.ibm.com:5003",
        "https://f48a4804199c419aa3641b46e94e2dac-vp2.us.blockchain.ibm.com:5003",
        "https://f48a4804199c419aa3641b46e94e2dac-vp3.us.blockchain.ibm.com:5003"
    ]
    //Change the users whenever a new service is created , take from newtwork credentals.
    $scope.users = [{
            "enrollId": "user_type1_0",
            "enrollSecret": "a45f638b3b"
        },
        {
            "enrollId": "user_type1_1",
            "enrollSecret": "7163169e79"
        },
        {
            "enrollId": "user_type1_2",
            "enrollSecret": "77b83b83cd"
        },
        {
            "enrollId": "user_type1_3",
            "enrollSecret": "455f83b694"
        }
    ]

    
    $scope.enroll = function (data) {

        $q.all([
            $http.post($scope.url[0] + '/registrar', data).then(function (response) {
                $scope.loggedInUser = response.status;
                return response
            }, function (response) {
                alert('CONNTIMEOUT')
                return response.status
            }),
            $http.post($scope.url[1] + '/registrar', $scope.users[1]).then(function (response) {
                return response;
            }, function (response) {
                alert('VP1 NON RESPONSIVE');
                return response.status
            }),
            $http.post($scope.url[2] + '/registrar', $scope.users[2]).then(function (response) {
                return response;
            }, function (response) {
                alert('VP2 NON RESPONSIVE');
                return response.status
            }),
            $http.post($scope.url[3] + '/registrar', $scope.users[3]).then(function (response) {
                return response;
            }, function (response) {
                alert('VP3 NON RESPONSIVE');
                return response.status
            })
        ]).then(function (array) {
            if ($scope.loggedInUser === 200) {
                //Redirect to SetLedger
                window.location = '#!/setledger'
            }
        });
    }
});

