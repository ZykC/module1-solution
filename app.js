(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.dishesList = "";

    $scope.message = "";


    $scope.checkIfTooMuch = function() {

      if (dishesNumber($scope.dishesList) <=3 ){
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }

    };

    function dishesNumber(string) {

      var wordsArray = string.split(',');

      return wordsArray.length;

    };

  }

})();
