'use strict';
angular.module('myApp.people')
.service('PeopleService',['$http',function($http)
{
	var People=this;
	People.fetchAllPeopleDetails = function()
	{
		return $http.get('http://localhost:8050/JASONFiles/people.json')
		.then(
						function(response)
						{
								return response.data;
						},
						function(errResponse)
						{
								console.error('Error while fetching users');
								//return $q.reject(errResponse);
						}
			);
	}
}])
