app.controller('enrollController', function ($scope, $http, $q) {
    $scope.url = [
        "https://df061a1073b9424b8bc40a991f01f792-vp0.us.blockchain.ibm.com:5002",
        "https://df061a1073b9424b8bc40a991f01f792-vp1.us.blockchain.ibm.com:5002",
        "https://df061a1073b9424b8bc40a991f01f792-vp2.us.blockchain.ibm.com:5002",
        "https://df061a1073b9424b8bc40a991f01f792-vp3.us.blockchain.ibm.com:5002"
    ]
    //Change the users whenever a new service is created , take from newtwork credentals.
    $scope.users = [{
            "enrollId": "user_type1_0",
            "enrollSecret": "054f5029ce"
        },
        {
            "enrollId": "user_type1_1",
            "enrollSecret": "82677e189c"
        },
        {
            "enrollId": "user_type1_2",
            "enrollSecret": "de69a71467"
        },
        {
            "enrollId": "user_type1_3",
            "enrollSecret": "3921812ae2"
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

