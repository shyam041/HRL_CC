'use strict';

angular.module('myApp.people',['ui.router','ngMaterial',])

.config(['$stateProvider',function($stateProvider)
{
	$stateProvider
	.state('administrative-options.people',
	{
		name:'administrative-options.people',
		url:'/peoples',
		templateUrl:'administrative-options/people/people.html',
		controller:'PeopleCtrl'
	})

}])

.controller('PeopleCtrl',[function()
{

}])