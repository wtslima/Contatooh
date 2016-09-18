angular.module('contatooh').controller('ContatoController',
    function($scope, Contato, $routeParams) {

        //var Contato = $resource('/contatos/:id');

        if($routeParams.contatoId){
             Contato.get({id: $routeParams.contatoId},
                  function (contato) {
                     $scope.contato = contato;
                     },
                 function (erro) {
                    $scope.mensagem = {texto: 'Não foi possível obter o contato.'};
                    console.log(erro);
                }
            );
    }
    else
    {
        $scope.contato = new Contato();
    }

    $scope.salva = function () {
        $scope.contato.$save()
            .then(function () {
                $scope.mensagemSuccess = {texto: 'Contato salvo com sucesso'};
                //limpa o formulario
                $scope.contato = new Contato();
            })
            .catch(function (erro) {
                $scope.mensagem = {texto: 'Não foi possível salvar o contato.'};
            });
    };

     Contato.query(function(contatos) {
        $scope.contatos = contatos;
        });
});