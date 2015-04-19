/**
 * Created by Weydson on 12/04/2015.
 */

app.factory("session", ['$http', function($http) {
    var serviceBase = '';
    var obj = {
        token: "",
        user: ""
    };



    obj.authorize = function(){
        //passo login e senha e recebo token
        return $http.get("teste.json");
    }

    obj.createSession = function(token){
      //chama http passando token para criar sessao e recebe sessao criada pela api
        return $http.get("session.json");
    };

    obj.setUser = function(name){
        obj.user = name;
    };
    //where u will code the api service
    return obj;
}]);
