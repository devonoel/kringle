angular.module('donations', [])

  .controller('DonationsController', ['$scope', function($scope, $http, Donations) {
    $scope.formData = {};

    $scope.createDonation = function() {
      if (!$.isEmptyObject($scope.formData)) {
        Donations.create($scope.formData)
          .success(function(data) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
          });
      };
    };
  }]);
