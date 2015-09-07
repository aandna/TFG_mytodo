'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:removedholadir
 * @description
 * # removedholadir
 */
angular.module('mytodoApp')
  .directive('removedholadir', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/removedholadir.html',
      link: function postLink(scope, element, attrs) {
        element.text('this is the removedholadir directive');
      }
    };
  });
