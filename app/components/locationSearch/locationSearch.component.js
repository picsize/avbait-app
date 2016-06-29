
avBait.component('locationSearch', {
    templateUrl: '/app/components/locationSearch/locationSearch.component.html',
    controller: function ($scope, Server) {

        $scope.models = {
            categories: [],
            subCategories: [],
            showResults: false,
            search:''
        }

        $scope.getSubCategories = function () {
            Server.post('getCategories')
            .success(function (res) {
                $scope.models.subCategories = new Array();
                $scope.models.categories = JSON.parse(res.d).categories;
                var subCategories = [];
                for (var i = 0; i < $scope.models.categories.length; i++) {
                    for (var j = 0; j < $scope.models.categories[i].SubCategory.length; j++) {
                        $scope.models.subCategories.push($scope.models.categories[i].SubCategory[j]);
                    }
                }
            })
            .error(function (res) {
                console.log(res)
            })
        }

        $scope.getSubCategories();

        $scope.inputChanged = function (selection) {  
        }
    }
});