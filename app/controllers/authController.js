
avBait.controller('authController', function ($rootScope, $scope, $uibModalInstance, data, Server, Cookie) {

    $scope.models = {
        email: '',
        password: '',
        userType: 3,
        fullName: '',
        mobileNumber: '',
        homeNumber: '',
        familyStatus: 'M',
        gender: 'M',
        address: '',
        birthday: moment().format('DD/MM/YYYY'),
        image: ''
    }

    $scope.strings = {
        login: 'כניסה'
    }

    $scope.validation = {
        login: true
    }

    $scope.close = function () {
        $uibModalInstance.close();
    }

    $scope.registerUser = function () {
        Server.post('register', $scope.models)
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
        Server.post('login', { email: $scope.models.email, password: $scope.models.password })
        .success(function (res) {
            res = JSON.parse(res.d);
            console.log('login', res);
            if (res.state == 1) {
                Cookie.saveObject('user', res.user);
                $rootScope.user = res.user;
                $scope.close();
            }
        })
        .error(function (res) {
            //alert('ארעה תקלה במהלך ההתחברות. אנא נסו שנית במועד מאוחר יותר');
            //$scope.close();
            $scope.strings.login = 'שם משתמש או סיסמה שגויים';
            $scope.validation.login = false;
        })
    };

    $scope.changeValidation = function () {
        $scope.strings.login = 'כניסה';
        $scope.validation.login = true;
    }

});

