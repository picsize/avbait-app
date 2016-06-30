
avBait.component('order', {
    templateUrl: 'app/components/order/order.component.html',
    bindings: {
        text: '='
    },
    controller: function ($rootScope, $scope, Popup) {
        $scope.models = {
            text:this.text,
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
    }
});