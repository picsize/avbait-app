
avBait.controller('popupCategory', function ($scope, $uibModalInstance, data, Cookie) {
    $scope.data = data;
    $scope.data.decode = decodeURI($scope.data.name);

    $scope.close = function () {
        Cookie.save('categoryId', $scope.data.categoryId);
        $uibModalInstance.close();
    }

});

