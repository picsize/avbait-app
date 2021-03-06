﻿
avBait.controller('ratingController', function ($rootScope, $scope, $stateParams, Cookie, Popup, Server, View) {

    $rootScope.steps = {
        firstStep: false,
        secondStep: true,
        lastStep: false
    };

    $scope.models = {
        slug: $stateParams.slug,
        businessList: []
    }

    $scope.init = function () {
        if ($stateParams.slug) {
            Server.post('getBusinessForCategory', { slug: $scope.models.slug })
            .success(function (res) {
                if (JSON.parse(res.d).state == 1) {
                    $scope.models.businessList = JSON.parse(res.d).businessList;
                    for (var i = 0; i < $scope.models.businessList.length; i++) {
                        $scope.models.businessList[i].showNumber = false;
                    }
                }
            })
            .error(function (res) {
            })
        }
    }

    $scope.getStars = function (rating) {
        var val = parseFloat(rating);
        var size = val / 5 * 100;
        return size + '%';
    }

    $scope.init();



});



