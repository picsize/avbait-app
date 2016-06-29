
avBait.controller('categoryController', function ($rootScope, $scope, $stateParams, Cookie, Popup, Server, View) {

    $rootScope.steps = {
        firstStep: true,
        secondStep: false,
        lastStep: false
    };

    $scope.models = {
        slug: $stateParams.slug,
        category: {},
        subCategories: []
    }

    $scope.init = function () {
        if ($stateParams.slug) {
            Server.post('getCategoryBySlug', { slug: $scope.models.slug })
            .success(function (res) {
                if (JSON.parse(res.d).state == 1) {
                    $scope.models.category = JSON.parse(res.d).category;
                    $scope.getSubCategories();
                }
            })
            .error(function (res) { })
        }
    }

    $scope.getSubCategories = function () {
        Server.post('getSubCategories', { categoryId: $scope.models.category.Id })
       .success(function (res) {
           if (JSON.parse(res.d).state == 1) {
               $scope.models.subCategories = JSON.parse(res.d).subCategories;
               console.log('sub', $scope.models.subCategories);
           }
       })
       .error(function (res) {
           console.log(res)
       })
    }

    $scope.showTab = function (id) {
        angular.element('.tab-pane').removeClass('in active');
        angular.element(id).addClass('in active');
    }

    $scope.setCategoryCookie = function (category) {
        Cookie.saveObject('category', category);
    }

    $scope.saveCategory = function (sub) {
        Cookie.saveObject('subCategory', sub);
        Cookie.saveObject('category', $scope.models.category);
        //if (models) {

        //}
        View.show('website.home.choose');
        //ui-sref="website.home.choose"
    }

    $scope.init();



});



