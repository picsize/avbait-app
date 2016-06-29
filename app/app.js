/// <reference path="../lib/angular-1.5.6/angular.min.js" />

var avBait = angular.module('avBait',
    [
        'ui.router',
        'ui.bootstrap',
        'angularCSS',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'angucomplete-alt',
        'angular-loading-bar'
    ]);

avBait.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

avBait.run(function (Server, $rootScope) {
    Server.post('getRoute')
    .success(function (res) {
        $rootScope.routing = JSON.parse(res.d).routes;
    })
    .error(function (res) { })

    setInterval(function () {
        angular.element('.placeholder-label input').each(function (index) {
            elem = angular.element(this);
            (elem.val() != '') ? elem.addClass('has-text') : elem.removeClass('has-text');
        });
    }, 1000 * 0.5);
    
});




