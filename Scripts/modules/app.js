angular.module('ReportIt', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/about-us', {
            templateUrl: 'Partials/about-us.html'
        })
        .when('/confirmation', {
            templateUrl: 'Partials/confirmation.html'
        })
        .when('/contact-us', {
            templateUrl: 'Partials/contact-us.html'
        })
        .when('/create-report', {
            templateUrl: 'Partials/create-report.html'
        })
        .when('/failed', {
            templateUrl: 'Partials/failed.html'
        })
        .when('/home', {
            templateUrl: 'Partials/home.html'
        })
        .when('/login', {
            templateUrl: 'Partials/login.html'
        })
        .when('/search-by-name', {
            templateUrl: 'Partials/search-by-name.html'
        })
        .when('/search-nearby', {
            templateUrl: 'Partials/search-nearby.html'
        })
        .when('/settings', {
            templateUrl: 'Partials/settings.html'
        })
        .when('/submission', {
            templateUrl: 'Partials/submission.html'
        })
        .when('/terms-of-service', {
            templateUrl: 'Partials/terms-of-service.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);