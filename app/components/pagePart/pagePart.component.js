
avBait.component('pagePart', {
    templateUrl: '/app/components/pagePart/pagePart.component.html',
    bindings: {
        page: '='
    },
    controller: function ($scope) {
        $scope.models = {
            html: this.page.html,
            css: this.page.css,
            js: this.page.js
        }
    }
});