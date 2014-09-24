(function(){
  'use strict';

  angular.module('destinate')
  .controller('destinationsCtrl', ['$scope', 'Destination', function($scope, Destination){
    $scope.page = 'Add A Destination:';
    $scope.destinations = [];

    Destination.all().then(function(res){
      $scope.destinations = res.data.lifts;
    });

    $scope.addDestination = function(){
      Destination.create($scope.name).then(function(res){
        $scope.destinations.push(res.data.destination);
        $scope.name = '';
      });
    };
  }]);
})();

