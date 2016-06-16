
avBait.controller('order', function ($scope, $stateParams, Cookie, Server) {
    $scope.models = {
        orderType: $stateParams.type,
        orderCategoryName: $stateParams.sub,
        categoryId: Cookie.get('categoryId') * 1,
        userId: 1000,

    }

    

 
    

});



