angular.module('wishService', [])

  .factory('Wishes', function($http) {
    return {
      get : function() {
        return $http.get('/api/wishes');
      },
      create : function(wishData) {
        return $http.post('/api/wishes', wishData);
      }
    }
  };
