
avBait.controller('category', function ($rootScope, $scope, $stateParams, Cookie, Popup, Server) {

    $rootScope.steps = {
        firstStep: true,
        secondStep: false,
        lastStep:false
    };

    $scope.models = {
        categories: [],
        subcategories: []
    }

    $scope.openPopup = function (name, price) {
        var data = { name: name, price: price };
        Popup.open('popup-category', 'popupCategory', data);
    }

    $scope.init = function () {
        Server.post('getCategories')
        .success(function (res) {
            $scope.models.categories = JSON.parse(res.d).categories;
            console.log($scope.models);
        })
        .error(function (res) {
            console.log(res)
        })
    }

    $scope.getSubCategories = function () {
        var subCategories = [];

        for (var i = 0; i < $scope.models.categories.length; i++) {
            for (var j = 0; j < $scope.models.categories[i].SubCategory.length; j++) {
                subCategories.push($scope.models.categories[i].SubCategory[j]);
            }
        }

        return subCategories;
    }

    $scope.setCategoryCookie = function (category) {
        Cookie.saveObject('category', category);
    }

    $scope.init();



});



