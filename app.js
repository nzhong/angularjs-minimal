'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ui.bootstrap',
    'ui.router',
    'myApp.mainPage',
    'myApp.mainSidebar',
    'myApp.main',
    'myApp.p2',
    'myApp.p3'
]);

var mainPageModule = angular.module('myApp.mainPage', []);
mainPageModule.controller('mainPageCtrl', ['$scope', function ($scope) {


}]);

var mainSidebarModule = angular.module('myApp.mainSidebar', []);
mainSidebarModule.controller('mainSidebarCtrl', ['$scope', '$rootScope', '$http', '$location', 
    function ($scope, $rootScope, $http, $location) {

        $scope.m1Collapsed = false;
        $scope.m4Collapsed = true;

        $scope.init = function () {
        };
        $scope.init();
}]);
