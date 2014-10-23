angular.module('mainService', [])
  .factory('MainSrvc', function($http) {
    return {
      createDonation: function(data) {
        var request = {
          "amount" : data
        };
        return $http.post('/api/donations', request);
      },

      createWish:  function(data) {
        var request = {
          "text" : data
        };
        return $http.post('/api/wishes', request);
      },

      getWishes: function() {
        return $http.get('/api/wishes');
      }
    }
  });
