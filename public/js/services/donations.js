angular.module('donationService', [])

  .factory('Donations', function($http) {
    return {
      create : function(donationData) {
        return $http.post('/api/donations', donationData);
      }
    }
  });
