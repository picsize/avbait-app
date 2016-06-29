﻿
avBait.component('websiteMenu', {
    templateUrl: 'app/components/menu/menu.component.html',
    controller: function ($rootScope, $scope, Popup, Cookie) {
        $scope.models = {
            user: {},
            showWelcome: false
        }
        
        

        $scope.register = function () {
            Popup.open('popup-register', 'registerAndLogin', '');
        }

        $scope.login = function () {
            Popup.open('popup-login', 'registerAndLogin', '');
        }

        $scope.init = function () {
            var userLogin = setInterval(function () {
                $scope.models.user = Cookie.getObject('user');
                if ($scope.models.user != undefined) {
                    $scope.models.showWelcome = true;
                } else {
                    $scope.models.showWelcome = false;
                }
            }, 1000 * 0.5);
        }

        $scope.init();
    }
});