angular.module('mainController', [])
  .controller('MainCtrl', ['MainSrvc', '$scope', '$http', function(MainSrvc, $scope, $http) {
    $scope.formData = {};

    $scope.createDonation = function() {
      if (!$.isEmptyObject($scope.formData)) {
        MainSrvc.createDonation($scope.formData.amount);
        MainSrvc.createWish($scope.formData.text);
        $scope.formData = {}
      };
    };

    $scope.getWishes = function() {
      MainSrvc.getWishes();
    };
  }]);
