angular.module('contatooh').controller('ContatosController',
    function(Contato, $scope) {

    $scope.contatos = [];
    
    $scope.filtro = '';

    $scope.mensagem = {texto: ''};
    $scope.mensagemSuccess = {texto: ''};

 //   var Contato = $resource('/contatos/:id');

    function buscaContatos() {
        Contato.query(
            function(contatos) {
            $scope.contatos = contatos;
            $scope.mensagem = {};
        },
            function(erro) {
            console.log(erro);
            $scope.mensagem = {
                texto: 'Não foi possível obter a lista de contatos.'
                };
            }
        );
    }
    buscaContatos();

    $scope.remove = function(contato) {
        Contato.delete({id: contato._id},
            buscaContatos,
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível remover o contato.'};
                console.log(erro);
          }
        );
    };
  });