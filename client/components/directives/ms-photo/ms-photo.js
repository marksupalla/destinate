/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('msPhotoModule', [])
  .factory('PhotoApi', ['$http', function($http){
    function info(place){
      console.log(place);
      return $http.jsonp('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c38d2aeeef15b365489521389527d0fc&tags=' + place + '&sort=relevance&per_page=1&page=1&format=json&auth_token=72157647572679800-decd2c3596f31ca6&api_sig=9b15614ff0f9ec79478360f5114224f5&callback=JSON_CALLBACK');
    }

    return {info:info};
  }])

  .directive('msPhoto', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/ms-photo/ms-photo.html';
    o.scope       = {title:'@', remove:'&'};
    o.link        = function(scope, element, attrs){
                    };
    o.controller  = ['$scope', 'PhotoApi', function($scope, PhotoApi){
                      PhotoApi.info($scope.destination).then(function(response){
                        debugger;
                       // $scope.destination = response.data[0];
                      });
                    }];
    return o;
  }]);
})();

