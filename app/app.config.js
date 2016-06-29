

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
        .state('website.page', {
            url: 'מאמרים/:slug',
            controller: 'pageController',
            templateUrl: '/app/views/website/pages/dynamic.html'
        })
        .state('website.contactUs', {
            url: '/צור-קשר',
            templateUrl: '/app/views/website/pages/contact-us.html'
        })
        .state('website.application', {
            url: '/אפליקציה',
            templateUrl: '/app/views/website/pages/application.html'
        })
        .state('website.solution', {
            url: '/הפתרון-שלנו',
            templateUrl: '/app/views/website/pages/solution.html'
        })
        .state('website.services', {
            url: '/שירותי-אב-הבית',
            templateUrl: '/app/views/website/pages/services.html'
        })
        .state('website.steps', {
            url: '/איך-זה-עובד',
            templateUrl: '/app/views/website/pages/steps.html'
        })
        .state('website.why', {
            url: '/למה-זה-כדאי',
            templateUrl: '/app/views/website/pages/why.html'
        })

    $logProvider.debugEnabled(true);

    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});


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

});