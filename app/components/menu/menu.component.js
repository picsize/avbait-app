
avBait.component('websiteMenu', {
    templateUrl: 'app/components/menu/menu.component.html',
    controller: function ($scope, Popup) {

        $scope.register = function () {
            Popup.open('popup-register', 'registerAndLogin', '');
        }

        $scope.login = function () {
            Popup.open('popup-login', 'registerAndLogin', '');
        }
    }
});