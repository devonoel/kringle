angular.module('mainController', [])
  .controller('MainCtrl', ['MainSrvc', '$scope', '$http', function(MainSrvc, $scope, $http) {
    $scope.formData = {};

    var handler = StripeCheckout.configure({
      key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
      image: 'images/christmas-reverse.png',
      token: function(token) {
        // Use the token to create the charge with a server-side script.
        // You can access the token ID with `token.id`
        $scope.createDonation();
      }
    });

    document.getElementById('contribute-button').addEventListener('click', function(e) {
      // Open Checkout with further options
      handler.open({
        name: 'Christmas Donation',
        description: 'Contribution to the NCRF',
        amount: $scope.formData.amount * 100
      });
      e.preventDefault();
    });

    $scope.createDonation = function() {
      if(!$.isEmptyObject($scope.formData.amount)) {
        MainSrvc.createDonation($scope.formData.amount)
          .success(function() {
            console.log('Donation added');
            $scope.createWish();
          });
      };
    }

    $scope.createWish = function() {
      if(!$.isEmptyObject($scope.formData.text)) {
        MainSrvc.createWish($scope.formData.text)
          .success(function() {
            console.log('Wish added');
            $scope.formData = {};
          });
      } else {
        $scope.formData = {};
      };
    }

    $scope.disableButton = function() {
      // Diable the button if amount is not defined or is not a number
      var amountInvalid = !$scope.formData.amount || !$.isNumeric($scope.formData.amount)
      return amountInvalid ? true : false
    }

    $scope.getWishes = function() {
      MainSrvc.getWishes();
    }
  }]);
