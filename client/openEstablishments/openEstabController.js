angular.module('goodEats.openEstab', [])

.controller('openEstabController', function($scope, Search) {
  $scope.query = Search.options;

  $scope.toggleOpenEstablishments = function() {
    $scope.query.openNow = !$scope.query.openNow;
    Search.search();
  };
});
