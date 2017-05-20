'use strict';

angular.module('myApp.delivery-units')

.service('DeliveryUnitService',['$http',function($http)
{
	var DU = this;
	DU.fetchAllDUDetails=function() 
	{
        return $http.get('http://localhost:8050/JASONFiles/dudetails.json')
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
