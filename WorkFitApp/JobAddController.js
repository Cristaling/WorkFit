(function(){
	'use strict'
	var app = angular.module('WorkFit');
	app.controller('JobAddController', ['$location', '$cookies', 'skillFactory', function($location, $cookies, skillFactory)
	{
		var vm = this;
		
        vm.entry = {};
        vm.skills = skillFactory;

        vm.addJob = addJob;

        function addJob(){
            var cookie = $cookies.getAll();
			if('JobOffers' in cookie){
				var entries = $cookies.getObject('JobOffers');
			}else{
				var entries = [];
			}
			entries.push(vm.entry);
			$cookies.putObject('JobOffers', entries);
			$location.path('/landing');
        }

	}]);
})();