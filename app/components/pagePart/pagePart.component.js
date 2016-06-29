
avBait.component('pagePart', {
    templateUrl: '/app/components/pagePart/pagePart.component.html',
    bindings: {
        part: '='
    },
    controller: function ($scope) {
        $scope.models = {
            html: this.part.html,
            css: this.part.css,
            js: this.part.js
        }
    }
});