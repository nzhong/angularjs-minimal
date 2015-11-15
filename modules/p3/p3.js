'use strict';

var p3Module = angular.module('myApp.p3', []);

p3Module.controller('p3Ctrl', ['$scope', '$http', '$modal',
    function ($scope, $http, $modal) {

    $scope.var1 = '(P3) World';
}]);


