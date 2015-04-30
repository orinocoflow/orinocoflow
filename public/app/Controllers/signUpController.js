/**
 * Created by Weydson on 25/04/2015.
 */

app.controller('signUpCtrl', function($scope, user) {

    $scope.userSign = {
      name : "",
      email: "",
      password: "" ,
      confirmPass: ""
    };

    $scope.signUpReturn = -1;

    $scope.signUp = function(){
        console.log("ola");

        if ($scope.userSign.password != $scope.userSign.confirmPass ) {
            console.log("diferente");

            $scope.signUpReturn = 1;
        } else {
            user.signUp($scope.userSign).then(function (signupResponse) {
                console.log("oi");
                if (signupResponse.status == 200)
                    $scope.signUpReturn = 0;
                else
                    $scope.signUpReturn = 2;
            });
        }
    };
});

