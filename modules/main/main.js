'use strict';

var mainModule = angular.module('myApp.main', []);

mainModule.controller('mainCtrl', ['$scope', '$http', 
    function ($scope, $http) {

    $scope.var1 = '(Main) World';
}]);


