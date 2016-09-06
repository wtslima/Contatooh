
//var ID_CONTATO_INC = 4;

/*var contatos = [
    {_id: 1, nome: 'Wellington Silva Lima', email: 'wtslima@gmail.com'},
    {_id: 2, nome: 'Josefa da Silva Lima', email:'josefaslima@gmail.com'},
    {_id: 3, nome: 'João Batista Lima Junior', email: 'jblimajunior@gmail.com'},
    {_id: 4, nome: 'João Batista Lima ', email: 'jotabemaravilha@gmail.com'}
];*/
/*module.exports = function(app) {
     
      var Contato = app.models.contato;
      var controller = {};
      
      controller.listaContatos = function(req, res) {
        var promise = Contato.find().exec()
          .then(
            function (contatos) {
              res.json(contatos);
              },
              function (erro) {
                console.error(erro)
                res.status(500).json(erro);
                }
          );
      };
  
      controller.obtemContato = function(req, res) {
        var _id = req.params.id;
        Contato.findById(_id).exec()
          .then(
            function (contato) {
                if(!contato) throw new Error("Contato não encontrado");
                res.json(contato);
              },
              function (erro) {
                console.log(erro);
                res.staus(404).json(erro)
                }
          );
      };

      controller.removeContato = function(req, res) {
        var _id = req.params._id;
        Contato.remove({"_id": _id}).exec()
          .then(
            function () {
              res.end();
              },
              function (erro) {
                return console.error(erro);
                }
          );
      };

      controller.salvaContato = function(req, res) {};

      return controller;
};*/

module.exports = function (app){

    var Contato = app.models.contato;

    var controller ={};

    controller.listaTodos = function (req, res) {
        Contato.find().exec()
          .then
          (function (contatos) {
            res.json(contatos);
            },
            function (erro) {
              console.log(erro)
              res.status(500).json(erro);
              }
          );
      };

    controller.obtemContato = function (req, res) {
        
        var _id = req.params.id;
        Contato.findById(_id).exec()
          .then(
            function (contato) {
              if(!contato) throw new Error("Contato não encontrado");
              res.json(contato);
              },
              function (erro) {
                console.log(erro)
                res.status(404).json(erro);
                }
          );
      };

    controller.removeContato = function (req, res) {

      var _id = req.params.id;
      Contato.remove({"_id" : _id}).exec()
        .then(
          function () {
            res.end();
            },
            function (erro) {
              return console.error(erro);
              }
        );
      };

    controller.salvaContato = function (req, res) {

        var _id = req.body.id;
        if(_id){
          Contato.findByIdAndUpdate(_id, req.body).exec()
            .then(
              function (contato) {
                res.json(contato);
                },
                function (erro) {
                  console.error(erro)
                  res.status(500).json(erro);
                  }
            );
        }else{
          Contato.create(req.body)
            .then(
              function (contato) {
                res.status(201).json(contato);
                },
                function (erro) {
                  console.log(erro);
                  res.status(500).json(erro);
                  }
            );
        }
      };

    return controller; 


  };

