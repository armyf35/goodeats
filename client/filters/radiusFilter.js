
angular.module('goodEats.radiusFilter', [])

.controller('geoController', function($scope, Search) {
  $scope.data = Search.options;
  $scope.search = function() {
    if ($scope.radius > 0) {
      $scope.data.radius = $scope.radius * 1000;
       } else {
        $scope.data.radius = 0;
         }
         Search.search();
         };



});