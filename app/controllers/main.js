
avBait.controller('mainController', function ($rootScope, $scope, $stateParams, Cookie, Popup, Server) {
    $rootScope.steps = {
        firstStep: true,
        secondStep: false,
        lastStep: false
    };

    $scope.models = {
        categories: [],
        subcategories: []
    }

    $scope.init = function () {
        try {
            Server.post('getCategories')
            .success(function (res) {
                $scope.models.categories = JSON.parse(res.d).categories;
                //console.log($scope.models);
                $scope.getSubCategories();
            })
            .error(function (res) {
                console.log(res)
            })
        } catch (e) {

        }
    }

    $scope.getSubCategories = function () {
        var subCategories = [];

        for (var i = 0; i < $scope.models.categories.length; i++) {
            for (var j = 0; j < $scope.models.categories[i].SubCategory.length; j++) {
                subCategories.push($scope.models.categories[i].SubCategory[j]);
            }
        }
        //console.log(subCategories);
        return subCategories;
    }

    $scope.setCategoryCookie = function (category) {
        Cookie.saveObject('category', category);
    }

    $scope.init();
});
