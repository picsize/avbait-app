
avBait.controller('subCategory', function ($rootScope, $scope, $stateParams, Cookie, Popup, Server) {
   
    $rootScope.steps = {
        firstStep: false,
        secondStep: true,
        lastStep: false
    };

    $scope.models = {
        subCategories: [],
        selectedCategory: $stateParams.categoryName,
        selectedSubCategory: $stateParams.subCategoryName,
        category: Cookie.getObject('category'),
        subCategoriesByTitle: []
    }

    //$scope.openPopup = function (name, price, categoryId) {
    //    var data = { name: name, price: price, categoryId: categoryId };
    //    Popup.open('popup-category', 'popupCategory', data);
    //}

    $scope.init = function () { 
        var data = {categoryId:$scope.models.category.Id}
        Server.post('getSubCategories',data)
        .success(function (res) {
            $scope.models.subCategoriesByTitle = JSON.parse(res.d).categories;
            console.log($scope.models);
        })
        .error(function (res) {
            console.log(res)
        })
    }

    $scope.init();

    

});



