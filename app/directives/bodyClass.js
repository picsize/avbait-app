﻿avBait.directive('bodyClass', ['$rootScope', '$timeout',
  function ($rootScope, $timeout) {
      return {
          restrict: 'A',
          scope: {},
          link: function (scope, elem, attr, ctrl) {

              $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                  var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.bodyClass) ? fromState.data.bodyClass : 'big-banner';
                  var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.bodyClass) ? toState.data.bodyClass : 'small-banner';

                  // don't do anything if they are the same
                  if (fromClassnames != toClassnames) {
                      if (fromClassnames) {
                          elem.removeClass(fromClassnames);
                      }

                      if (toClassnames) {
                          elem.addClass(toClassnames);
                      }
                  }
              });
          }
      }
  }
]);