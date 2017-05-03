(function(){
	'use strict'
	var app = angular.module('WorkFit');
	app.controller('LandingController', ['$location', function($location)
	{
		var vm = this;

		vm.getToJobAddPage = getToJobAddPage;
        vm.getToStudentPage = getToStudentPage;
		
		function getToJobAddPage(){
			$location.path('/addjob');
		}

        function getToStudentPage(){
			$location.path('/student');
		}
	}]);
})();