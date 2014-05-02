'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {templateUrl: 'views/add.part.html', controller: 'addCtrl'});
  $routeProvider.when('/home', {templateUrl: 'views/index.part.html', controller: 'indexCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
