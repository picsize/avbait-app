
avBait.component('order', {
    templateUrl: 'app/components/order/order.component.html',
    controller: function ($rootScope, $scope, Popup) {
        $scope.models = {
            isDifferentAddress: false,
            payWithCredit:false
        }

        $scope.changePaymet = function () {
            alert('sdsd')
        }

        $rootScope.steps = {
            firstStep: false,
            secondStep: false,
            lastStep: true
        };

        //$rootScope.checkText = function (id) {
        //    debugger;
        //    elem = angular.element(id);
        //    return (elem.val != '') ? true : false;
        //}
        
    }
});