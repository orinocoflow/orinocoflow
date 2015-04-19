app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/',{
                title: 'LOGIN',
                templateUrl: 'app/Views/login.html',
                controller: 'loginCtrl'
            }).when('/error',{
                title: 'ERRO',
                templateUrl: 'app/Views/error.html',
                controller: 'homeCtrl'
            })
                .when('/home', {
                    title: 'HOME',
                    templateUrl: 'app/Views/home.html',
                    controller: 'homeCtrl'
                })
                .otherwise({
                    redirectTo: '/error'
                });
    }]);

