(function(){
	'use strict'
	var app = angular.module('WorkFit');
	app.controller('StudentController', ['$location', '$cookies', 'skillFactory', function($location, $cookies, skillFactory)
	{
		var vm = this;
		
        vm.skills = skillFactory;
        vm.jobs = [];

		var cookie = $cookies.getAll();
		if('JobOffers' in cookie){
			vm.jobs = $cookies.getObject('JobOffers');
		}

		vm.removeJob = removeJob;

		function removeJob(job){
			vm.jobs = vm.jobs.filter(function(el) {
				return el !== job;
			});
			$cookies.putObject('JobOffers', vm.jobs);
		}

	}]);
})();