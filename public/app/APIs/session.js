/**
 * Created by Weydson on 12/04/2015.
 */

app.factory("session", ['$http', function($http) {
    var serviceBase = '';
    var obj = {
        token: "",
        user: ""
    };



    obj.authorize = function(user){
        //passo login e senha e recebo token
        return $http.post("http://localhost:3000/login", user);
    }

    obj.createSession = function(userBind){
      //chama http passando token para criar sessao e recebe sessao criada pela api
        obj.user = userBind.name;
    };

    obj.setUser = function(name){
        obj.user = name;
    };
    //where u will code the api service
    return obj;
}]);
