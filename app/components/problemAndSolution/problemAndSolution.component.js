
avBait.component('problemAndSolution', {
    templateUrl: '/app/components/problemAndSolution/problemAndSolution.component.html',
    bindings: {
        part: '<',
        onDelete: '&',
        onUpdate: '&'
    },
    controller: function () {
        this.user = { name: 'world' };
    }
});