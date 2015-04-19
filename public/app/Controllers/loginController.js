/**
 * Created by Weydson on 12/04/2015.
 */

app.controller('loginCtrl', function ($scope, session, $location) {
    $scope.user = {
        email: "",
        password: ""
    };

    $scope.login = function(){
        console.log("OI");
        session.authorize().then(function(tokenResponse){
            session.token = tokenResponse.data;
            session.createSession(session.token).then(function(sessionResponse){
                console.log(sessionResponse);
                session.setUser(sessionResponse.data.user);
                $location.path("/home");
            });
        });

    };

});
