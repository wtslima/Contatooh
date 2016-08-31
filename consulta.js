var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var _idProcurado = new ObjectId("57c3aea484a50fcbceeefc6a");

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
    function (erro, db) {
        if(erro)throw err;
        db.collection('contatos').findOne({id:_idProcurado},
            function(erro, contato){
                if(erro) throw err;
                console.log(contato);
            }
        );
    }
);