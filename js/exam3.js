var app3=angular.module("app3", [] );


app3.controller("gListCtrl", function($scope){

    $scope.groceries=[{item: "tomatoes", purchased: false},
      {item: "potatoes", purchased: false},
      {item: "Bread", purchased: false},
      {item: "Hummus", purchased: false}  ];

      $scope.getList=function(){
        return $scope.showList ? "ulgroceryList.html": "groceryList.html";
      }

});
