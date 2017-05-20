'use strict';

angular.module('myApp.projects')

.service('ProjectsService',['$http',function($http)
{
	var Projects = this;
	Projects.fetchAllProjectsDetails=function()
	{
        return $http.get('http://localhost:8050/JASONFiles/projects.json')
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
