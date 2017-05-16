var app1=angular.module("app1", []);

app1.controller('ctrl1',function($scope){
  $scope.first=1;
  $scope.second=2;
  $scope.updateValue=function(){
      $scope.calculation=$scope.first + " + " + $scope.second + " = "+(+$scope.first + +$scope.second)
  };

});
