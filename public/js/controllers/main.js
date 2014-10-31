angular.module('mainController', [])
  .controller('MainCtrl', ['MainSrvc', '$scope', '$http', function(MainSrvc, $scope, $http) {
    $scope.formData = {};
    $scope.wishes = [];

    // Get the wish list on page load
    MainSrvc.getWishes()
      .success(function(data) {
				$scope.wishes = data;
			});

    var handler = StripeCheckout.configure({
      key: 'pk_test_VLW5oVN0kiYnoYtlcjPQe8WF',
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
            $scope.getWishes();
          });
      } else {
        $scope.formData = {};
      };
    }

    $scope.getWishes = function() {
      MainSrvc.getWishes()
        .success(function(data) {
          $scope.wishes = data;
        });
    }

    $scope.disableButton = function() {
      // Disable the button if amount is not defined or is not a number
      var amountInvalid = !$scope.formData.amount || !$.isNumeric($scope.formData.amount);
      return amountInvalid ? true : false;
    }
  }]);
