(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.displayMsg = "";
  $scope.borderColor = "";
  $scope.fontColor = "";

  $scope.checkItems = function(){
    var numOfItems = "";
    var displayMsg = "";
    if($scope.name != ""){
      numOfItems = $scope.name.split(",");
      if(numOfItems.length <= 3){
        displayMsg = "Enjoy!";
        $scope.borderColor = "green";
        $scope.fontColor = "green";
      }
      else{
        displayMsg = "Too much!";
        $scope.borderColor = "green";
        $scope.fontColor = "green";
      }
    }
    else{
      displayMsg = "Please enter data first";
      $scope.borderColor = "red";
      $scope.fontColor = "red";
    }
    $scope.displayMsg = displayMsg;
  }
}
})();
