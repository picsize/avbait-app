

avBait.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $logProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('website',{
            abstract: true,
            templateUrl: '/app/views/website/index.html'
        })
        .state('website.home', {
            abstract: true,
            templateUrl: '/app/views/website/main.html',
            controller: 'homePage',
            data: { pageTitle: 'מה הבעיה?' }
        })
        .state('website.home.category', {
            url: '/',
            controller: 'category',
            templateUrl: '/app/views/website/category/main.html',
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