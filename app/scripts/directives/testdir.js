'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:testdir
 * @description
 * # testdir
 */
angular.module('mytodoApp')
  .directive("testdir", function () {
    return {
      restrict: "AE",
      replace: true,
      templateUrl: "views/testdir.html",
      link: function postLink(scope, element, attrs){
          scope.change = function () {
          	element[0].innerHTML ='<removedholadir></removedholadir';
            $compile(element.contents())(scope);
          }
      }
    }
  });
