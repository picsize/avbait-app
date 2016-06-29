
avBait.component('join', {
    templateUrl: '/app/components/join/join.component.html',
    controller: function ($scope, View) {
        $scope.navigate = function (state) {
            View.show(state);
        }
    }
});