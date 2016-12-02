angular.module('goodEats.filters', [])

.controller('filterController', function($scope, $http){
  $scope.data = {};
  $scope.prices = []; 

  $scope.priceFilter = function(food, location, price) {
    $scope.prices.push(price);

  	return $http({
      method: 'POST',
      url: '/location',
      data: 
      {
      	"term": $scope.food,  //CREATE A SEARCH CONTROLLER AS A WRAPPER
      	"location": $scope.location,
      	"price": $scope.prices
      }
    })
    .then(function(data) {
      console.log('THE DATA', data);
      return data;

    })
    .catch(function(error) {
      console.log("ERROR:", error);
    })
  };
}); 

