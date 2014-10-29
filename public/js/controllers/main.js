angular.module('mainController', [])
  .controller('MainCtrl', ['MainSrvc', '$scope', '$http', function(MainSrvc, $scope, $http) {
    $scope.formData = {};

    $scope.showForm = false;

    $scope.toggleForm = function() {
      $scope.showForm = !$scope.showForm
    };

    $scope.createDonation = function() {
      if (!$.isEmptyObject($scope.formData)) {
        MainSrvc.createDonation($scope.formData.amount)
          .success(function() {
            MainSrvc.createWish($scope.formData.text)
              .success(function() {
                $scope.formData = {};
              });
          });
      };
    };

    $scope.getWishes = function() {
      MainSrvc.getWishes();
    };
  }]);
