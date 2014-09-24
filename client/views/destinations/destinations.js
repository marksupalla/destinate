(function(){
  'use strict';

  angular.module('destinate')
  .controller('DestinationsCtrl', ['$scope', 'Destination', function($scope, Destination){
    $scope.page = 'Add A Destination:';
    $scope.destinations = [];

    Destination.all().then(function(res){
      $scope.destinations = res.data.destinations;
    });

    $scope.addDestination = function(){
      Destination.create($scope.name).then(function(res){
        $scope.destinations.push(res.data.destination);
        $scope.name = '';
      });
    };
  }]);
})();

