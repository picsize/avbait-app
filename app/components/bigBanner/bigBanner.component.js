
avBait.component('bigBanner', {
    templateUrl: '/app/components/bigBanner/bigBanner.component.html',
    controller: function ($rootScope,$scope) {
        $rootScope.bannerClass = 'big-banner';
        $scope.process = $rootScope.steps;
        $rootScope.$watchCollection(process, function (newValue, oldValue) {});
    }
});