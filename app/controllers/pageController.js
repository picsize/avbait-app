
avBait.controller('pageController', function ($scope, $stateParams, Cookie, Server) {
   
    $scope.models = {
        slug: $stateParams.slug,
        page:{
            html: {},
            css: {},
            js: {}
        }
       
    }

    $scope.init = function () {
        switch ($scope.models.slug) {
            case 'צור-קשר': {
                $scope.models.page.html = '<h1>sasasasasasasasa</h1>'
            } break;
            default: { } break;

        }

    }

    $scope.init();
 
    

});



