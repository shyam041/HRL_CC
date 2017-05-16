'use strict';

angular.module('myApp.projects', ['ui.router','ngMaterial'])

.config(['$stateProvider',function($stateProvider)
{
	$stateProvider
	.state('administrative-options.projects',
	{
		name:'administrative-options.projects',
		url:'/projects',
		templateUrl:'administrative-options/projects/projects.html',
		controller:'ProjectCtrl'
	});

}])
.controller('ProjectCtrl', [function() {

}]);



