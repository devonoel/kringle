angular.module('wishes', [])

  .controller('WishesController', ['$scope', function($scope, $http, Wishes) {
    $scope.formData = {};

    Wishes.get()
      .success(function(data) {
        $scope.wishes = data;
      });

    $scope.createWish = function() {
      if (!$.isEmptyObject($scope.formData)) {
        Wishes.create($scope.formData)
          .success(function(data) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
          });
      };
    };
  }]);
