
avBait.component('order', {
    templateUrl: 'app/components/order/order.component.html',
    controller: function ($scope, Popup) {
        $scope.models = {
            isDifferentAddress: false,
            payWithCredit:false
        }

        $scope.changePaymet = function () {
            alert('sdsd')
        }
        
    }
});