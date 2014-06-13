var app = angular.module('Angular', ['ngRoute', 'ngResource', 'ui.bootstrap']);
app.config(function($routeProvider){

    $routeProvider.when("/about", {
        controller: "/Controllers/About",
        templateUrl: "/Views/About.html"
    });

    $routeProvider.when("/gallery", {
        controller: "/Controllers/Gallery",
        templateUrl: "/Views/Gallery.html"
    });

    $routeProvider.otherwise({redirectTo: "/Views/Index.html"})

});