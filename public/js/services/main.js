angular.module('mainService', [])
  .service('MainSrvc', function($http) {
    this.createDonation = function(data) {
      var request = {
        "amount" : data
      };
      return $http.post('/api/donations', request);
    }

    this.createWish = function(data) {
      var request = {
        "text" : data
      };
      return $http.post('/api/wishes', request);
    }

    this.getWishes = function() {
      return $http.get('/api/wishes');
    }
  });
