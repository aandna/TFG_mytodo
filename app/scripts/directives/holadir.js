'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:holadir
 * @description
 * # holadir
 */
angular.module('mytodoApp')
  .directive('holadir', function ($compile) {
    return {
      restrict: 'E',
      replace: true, //es vol substituir el contingut
      templateUrl: 'views/holadir.html',
      link: function postLink(scope, element, attrs) {
      	/*element.bind('click', function () {
      		element.remove();
      	});
**/
      	scope.remove = function()
      	{
          //aquesta funcio hauria de substituir el contingut per un boto "Create" que crides a la funcio create()
      		element[0].innerHTML = '<button class = "btn btn-info" ng-Click="create()"> Create </button>';
          $compile(element.contents())(scope);
      	}

        scope.create = function()
        {
          //aquesta funcio hauria de restaurar el contingut del template un cop es premi el boto "Create"
          //TODO: substituir el HTML pel link del template
          element[0].innerHTML ='<div>This is the holadir view.<button class = "btn btn-danger" ng-Click="remove()"> X </button></div>';
          $compile(element.contents())(scope);
        }
      }
    };
  });
