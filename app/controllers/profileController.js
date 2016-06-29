
avBait.controller('profileController', function ($scope, $stateParams, Cookie, Popup, Server, View) {

    $scope.models = {
        slug: $stateParams.slug,
        id: $stateParams.id,
        user: Cookie.getObject('user')
    }

    $scope.init = function () {
        $scope.models.user.Birthday = moment($scope.models.user.Birthday)._d;
        switch ($scope.models.user.GenderString) {
            case 'ז': { $scope.models.user.Gender = 'M'; } break;
            case 'נ': { $scope.models.user.Gender = 'F'; } break;
            default: { } break;
        }
    }
    

    $scope.init();



});



