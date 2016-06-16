
avBait.component('pagePart', {
    templateUrl: '/app/components/pagePart/pagePart.component.html',
    bindings: {
        part: '=',
        onDelete: '&',
        onUpdate: '&'
    },
    controller: function () {
        debugger;
        this.user = { name: 'world' };
    }
});