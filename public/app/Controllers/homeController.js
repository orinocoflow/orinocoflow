
app.controller('homeCtrl', function($scope, session) {

    $scope.user = session.user;
    $scope.mensagem_generica = "PÁGINA DE TESTES! SISTEMA EM CONSTRUÇÃO!";
    $scope.mensagem_erro = "ESTA PAGINA NAO EXISTE!";
});
