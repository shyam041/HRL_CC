'use strict';

angular.module('myApp.projects', ['ui.router','ngMaterial'])

.config(['$stateProvider',function($stateProvider)
{
	$stateProvider
	.state('projects',
	{
		name:'projects',
		url:'/projects',
		templateUrl:'administrative-options/projects/projects.html',
		controller:'ProjectCtrl',
		controllerAs:'projects'
	});

}])
.controller('ProjectCtrl', ['ProjectsService',function(ProjectsService)
{
	var projects=this;
	projects.headers=['DU Name','Project Name','Project Manager'];
	var promise = ProjectsService.fetchAllProjectsDetails();
  promise.then(function(data)
  {
    projects.details = data;
  });
  projects.onEditDu=function(project)
  {
    alert(project);
    console.log(project);
  }
}]);
