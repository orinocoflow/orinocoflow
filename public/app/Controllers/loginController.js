/**
 * Created by Weydson on 12/04/2015.
 */

app.controller('loginCtrl', function ($scope, session, $location) {
    $scope.user = {
        email: "",
        password: ""
    };
    $scope.loginError ="";

    $scope.login = function(){
        session.authorize($scope.user).then(function(userBind){
            console.log(userBind.data[0]);
            if(userBind.data.length > 0) {
                session.setUser(userBind.data[0].name);
                $location.path("/home");
            }else{
                $scope.loginError = "USUARIO NAO EXISTE";
            }
            }, function(){
            $scope.loginError = "USUARIO NAO EXISTE";
        });

    };

});
