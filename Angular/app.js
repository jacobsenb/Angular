var app = angular.module('Angular', ['ngRoute', 'ngResource', 'ui.bootstrap']);
app.config(function($routeProvider){
    
    $routeProvider.when("/about", {
        controller: "AboutController",
        templateUrl: "/Angular/Views/About.html"
    });

    $routeProvider.when("/gallery", {
        controller: "GalleryController",
        templateUrl: "/Angular/Views/Gallery.html"
    });

    $routeProvider.when("/register", {
        controller: "RegisterController",
        templateUrl: "/Angular/Views/Register.html"
    });

    $routeProvider.otherwise({redirectTo: "/Views/Index.html"})

});