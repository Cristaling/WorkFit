(function(){
	'use strict'
	var app = angular.module('WorkFit', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngAria', 'ngMaterial', 'ngMessages'])
	app.config(function ($routeProvider) {
            $routeProvider
                .when("/landing", {
                    templateUrl: "WorkFitApp/LandingPage.html",
					controller: 'LandingController',
                    controllerAs: 'ctrl'
                })
                .when("/addjob", {
                    templateUrl: "WorkFitApp/JobAddPage.html",
                    controller: 'JobAddController',
                    controllerAs: 'ctrl'
                })
                .when("/student", {
                    templateUrl: "WorkFitApp/StudentPage.html",
                    controller: 'StudentController',
                    controllerAs: 'ctrl'
                })
                .when("/list", {
                    templateUrl: "WorkFitApp/ListPage.html",
                    controller: 'ListController',
                    controllerAs: 'ctrl'
                })
		        .otherwise({ redirectTo: "/landing" });
	});
    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange')
            .accentPalette('orange');
    });
    app.factory('skillFactory', function() {
        var skills = [
            {
                name:"Cook",
                category:"raw"
            },
            {
                name:"Clean",
                category:"raw"
            },
            {
                name:"Drive",
                category:"raw"
            },
            {
                name:"Confident",
                category:"teamwork"
            },
            {
                name:"Funny",
                category:"teamwork"
            },
        ];
        return skills;
    });
})();