var app = angular.module('MapApp',['ngRoute', 'MapControllers']);

app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/testtt', {
                templateUrl: 'StatePages/Home.html',
                controller: 'MainCtrl'
            })
            .when('/VA', {
                templateUrl: 'StatePages/VA.html',
                controller: 'StateCtrl'
            })
            .otherwise({redirectTo: '/test'});
    }]);
