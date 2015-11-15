angular.module('myApp').config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state( 'main', {
        url: '/main',
        templateUrl: 'modules/main/main.html',
        controller: 'mainCtrl'
    })

    .state( 'p2', {
        url: '/p2',
        templateUrl: 'modules/p2/p2.html',
        controller: 'p2Ctrl'
    })

    .state( 'p3', {
        url: '/p3',
        templateUrl: 'modules/p3/p3.html',
        controller: 'p3Ctrl'
    });
}]);