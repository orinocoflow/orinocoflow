/**
 * Created by Weydson on 25/04/2015.
 */
app.factory("user", ['$http', function($http) {
    var serviceBase = '';
    var obj = {};

    obj.signUp = function(userForm){
        //sign up
        return $http.post("http://localhost:3000/signup", userForm);
    }


    return obj;
}]);

