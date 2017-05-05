(function(){
	'use strict'
	var app = angular.module('WorkFit');
	app.controller('ListController', ['$location', '$cookies', 'skillFactory', function($location, $cookies, skillFactory)
	{
		var vm = this;
		
        vm.skills = skillFactory;
        vm.jobs = [];
		vm.selectedSkills = [];

		var cookie = $cookies.getAll();
		
        if('JobOffers' in cookie){
			vm.jobs = $cookies.getObject('JobOffers');
		}

		if('MySkills' in cookie){
			vm.selectedSkills = $cookies.getObject('MySkills');
		}

        var index;

        for(index in vm.jobs){
            vm.jobs[index].score = getScore(vm.jobs[index]);
        }

        function getScore(job){
            var score = 0;
            var skillIndex;
            for(skillIndex in vm.selectedSkills){
                if(job.skills.indexOf(vm.selectedSkills[skillIndex]) >= 0){
                    score++;
                }
            }
            return score;
        }

        vm.clickJob = clickJob;

        function clickJob(job){
            if(job.redirect != undefined){
                if(job.redirect.indexOf("http") >= 0){
                    window.location.href = job.redirect;
                }
            }
            console.log("Heyo");
        }

	}]);
})();