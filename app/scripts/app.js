'use strict';

/**
 * @ngdoc overview
 * @name hackerNewsCloneApp
 * @description
 * # hackerNewsCloneApp
 *
 * Main module of the application.
 */
angular
  .module('hackerNewsCloneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
