(function(){
	'use strict'
	var app = angular.module('WorkFit');
	app.controller('StudentController', ['$location', '$cookies', 'skillFactory', function($location, $cookies, skillFactory)
	{
		var vm = this;
		
        vm.skills = skillFactory;
        vm.jobs = [];
		vm.selectedSkills = [];

		var cookie = $cookies.getAll();
		
		if('JobOffers' in cookie){
			vm.jobs = $cookies.getObject('JobOffers');
		}

		vm.getToListPage = getToListPage;
        
        function getToListPage(){
			$cookies.putObject('MySkills', vm.selectedSkills);
			$location.path('/list');
		}

	}]);
})();