

avBait.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $logProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('website', {
            abstract: true,
            templateUrl: '/app/views/website/index.html'
        })
        .state('website.home', {
            abstract: true,
            templateUrl: '/app/views/website/main.html',
            controller: 'mainController',
            data: { pageTitle: 'מה הבעיה?' }
        })
        .state('website.home.category', {
            url: '/',
            controller: 'mainController',
            css: '/app/views/website/process/category.css',
            templateUrl: '/app/views/website/process/main.html'
        })
        .state('website.page', {
            url: '/:slug',
            controller: 'pageController',
            templateUrl: '/app/views/website/pages/main.html'
        })
        //.state('website.home.slug', {
        //    url: '/:slug',
        //    templateProvider: ['type', '$templateRequest',
        //      function (type, templateRequest) {
        //          var tamplate = '';
        //          switch (type) {
        //              case 'main': {
        //                  tamplate = '/app/views/website/category/main.html';
        //              } break;
        //              case 'category': {
        //                  tamplate = '/app/views/website/category/sub-category.html'
        //              } break;
        //              default: { } break;

        //          }
        //          return templateRequest(tamplate);
        //      }
        //    ],
        //    controllerProvider: ['type',
        //      function (type) {
        //          return type + 'Controller';
        //      }
        //    ],
        //    resolve: {
        //        type: ['$http', '$stateParams',
        //          function ($http, $stateParams) {
        //              return $http.get("route.json")
        //                .then(function (response) {
        //                    var routeType = 'main';
        //                    for (var i = 0; i < response.data.routes.length; i++) {
        //                        if (response.data.routes[i].Slug == $stateParams.slug) {
        //                            routeType = response.data.routes[i].Type;
        //                            break;
        //                        }
        //                    }
        //                    return routeType;
        //                })
        //          }
        //        ]
        //    }
        //})
        .state('website.home.subCategories', {
            url: '/category/:slug',
            controller: 'categoryController',
            templateUrl: '/app/views/website/process/sub-category.html',
            css: '/app/views/website/process/sub-category.css'
        })
        .state('website.home.choose', {
            url: '/category/:slug/choose',
            controller: function ($rootScope) {
                $rootScope.steps = {
                    firstStep: false,
                    secondStep: true,
                    lastStep: false
                };
            },
            templateUrl: '/app/views/website/process/process-choose.html',
            css: '/app/views/website/process/process-choose.css'
        })
        .state('website.home.order-120', {
            url: '/category/:slug/order-120',
            //controller: 'categoryController',
            templateUrl: '/app/views/website/process/order-120.html'
        })
        .state('website.home.rating', {
            url: '/category/:slug/rating',
            //controller: 'ratingController',
            templateUrl: '/app/views/website/process/process-rating.html',
            css: '/app/views/website/process/process-rating.css'
        })
        .state('website.business', {
            url: '/business',
            //controller: 'category',
            templateUrl: '/app/views/website/handyman.html',
        })
    /*.state('website.category.main', {
        url: '/category',
        templateUrl: '/app/views/website/category/main.html',
        controller: 'category',
        data: { pageTitle: 'בחירת קטגוריה' }
    })
    .state('website.category.sub', {
        url: '/sub/:categoryName/:subCategoryName',
        templateUrl: '/app/views/website/category/sub-category.html',
        controller: 'subCategory',
        css: ['/app/views/website/category/sub-category.css', 'app/styles/website/pages/price.css'],
        data: { pageTitle: 'מה התקלה'}
    })
    .state('website.category.order', {
        url: '/order/:categoryName/:subCategoryName',
        templateUrl: '/app/views/website/category/category-order.html',
        controller: 'categoryOrder',
        data: { pageTitle: 'הזמנת בעל מקצוע תוך 120 דקות' }
    })
    .state('website.ratingCategory', {
        url: '/rating',
        templateUrl: '/app/views/website/rating/rating-category.html',
        controller: 'categoryOrder',
        css: ['/app/views/website/rating/rating-category.css', '/app/views/website/category/category.css'],
        data: { pageTitle: 'בחירת קטגוריה' }
    })
    .state('website.ratingSubCategory', {
        url: '/rating/:ratingCategoryName/:ratingSubCategoryName',
        templateUrl: '/app/views/website/rating-sub-category.html',
        controller: 'ratingSubCategory',
        css: 'app/styles/website/pages/rating-sub-category.css',
        data: { pageTitle: '444' }
    })
    .state('website.order', {
        url: '/order/:type/:sub',
        templateUrl: '/app/views/website/order.html',
        controller: 'order',
        css: 'app/styles/website/pages/order.css',
        data: { pageTitle: 'הזמנה'}
    })
    .state('website.private', {
        url: '/page/:slug',
        templateUrl: '/app/views/website/packages/private.html',
        controller: 'pages',
        css: '/app/views/website/packages/private.css',
        data: { pageTitle: 'אב הבית פרטי' }
    })
    .state('website.business', {
        url: '/business/:slug',
        templateUrl: '/app/views/website/packages/business.html',
        controller: 'pages',
        css: '/app/views/website/packages/business.css',
        data: { pageTitle: 'אב הבית למשרדים ועסקים' }
    })
    .state('admin', {
        url: '/admin',
        templateUrl: '/app/views/admin/main.html',
    })*/

    $logProvider.debugEnabled(true);

    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});

});