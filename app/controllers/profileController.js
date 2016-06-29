
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
        switch ($scope.models.user.FamilyStatusString) {
            case ('רווק' || 'רווקה'): {
                $scope.models.user.FamilyStatus = 'S';
            } break;
            case ('נשוי' || 'נשואה'): {
                $scope.models.user.FamilyStatus = 'M';
            } break;
            case ('גרוש' || 'גרושה'): {
                $scope.models.user.FamilyStatus = 'D';
            } break;
            case ('אלמן' || 'אלמנה'): {
                $scope.models.user.FamilyStatus = 'W';
            } break;
            default: { } break;

        }
    }

    //$scope.setGender = function (gender) {
    //    $scope.models.user.Gender = gender;
    //    $scope.models.user.GenderString = (gender == 'M') ? 'ז' : 'נ';
    //}


    $scope.init();



});



