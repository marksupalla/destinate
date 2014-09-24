(function(){
  'use strict';

  angular.module('destinate')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope, Home){
    $scope.places = ['Paris', 'Rome'];

    $scope.delDestination = function(index){
      $scope.places.splice(index, 1);
    };

    $scope.addDestination = function(){
      $scope.places.push($scope.place);
      $scope.place = null;
    };

  }]);
})();

