
angular.module('MapApp', ['ngRoute', 'MapControllers'])
    .config(['$routeProvider',
        function($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: '#/StatePages/Home.html',
                    controller: 'MainCtrl'
                })
                .when('/VA', {
                    templateUrl: '#/StatePages/VA.html',
                    controller: 'StateCtrl'
                })
                .otherwise({redirectTo: '#'});
        }]);
//app.controller('cfgController',function($scope){
//
//    /*
//     Here you can handle controller for specific route as well.
//     */
//});