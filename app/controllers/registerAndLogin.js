
avBait.controller('registerAndLogin', function ($scope, $uibModalInstance, data, Server) {
   
    $scope.models = {
        email:'',
        password:'',
        userType:3,
        fullName:'',
        mobileNumber:'',
        homeNumber:'',
        familyStatus:'M',
        gender:'M',
        address:'',
        birthday: moment().format('DD/MM/YYYY'),
        image:''
    }

    $scope.close = function () {
        $uibModalInstance.close();
    }

    $scope.registerUser = function () {
        Server.post('register',$scope.models)
        .success(function (res) {
            var data = JSON.parse(res.d);
            if (data.state == 1) {
                $scope.close();
                $scope.loginUser();
            }
            console.log('register', data);
        })
        .error(function (res) {
            console.log(res);
        });
    }

    $scope.loginUser = function () {
        Server.post('login', {email:$scope.models.email, password: $scope.models.password})
        .success(function (res) {
            res = JSON.parse(res.d);
            console.log('login',res);
        })
        .error(function (res) {

        })
    };

});

