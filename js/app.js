/* setup your angular app here */
var introApp = angular.module('IntroApp', []);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);



introApp.controller('listCtrl', ['$scope', function($scope){
  
  $scope.toDoList = fruits.concat(vegetables);

  $scope.toggleFruit = function() {
        
  }

}]);
