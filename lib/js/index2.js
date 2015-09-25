'use strict';

var app;

app = angular.module("scApp", ['pouchdb']);

app.controller("MainCtrl", [
  "$scope", "pouchDB", function($scope, pouchDB) {
    var bind, db, doc, error, get;

    $scope.db = pouchDB('dbencomendas');

    $scope.db.changes({
      since: 'now',
      live: true
    }).on('change',testeshow)


    $scope.addTodo = function(text){
      var todo = {
        _id: new Date().toISOString(),
        title: text,
        completed: false
      };
      $scope.db.put(todo, function callback(err, result){
        if (!err){
          console.log('DEU CERTO CARAI, O PUT.');
        }
      });
      $scope.todoadd = todo;
    }

    $scope.deletetodo = function(id){
      $scope.db.remove(id);
      console.log(id);
    }



    function testeshow(){
      $scope.db.allDocs({include_docs: true, descending: true}).then(function(doc) {
        $scope.teste = doc;
      }).catch(function (err) {
        console.log(err);
      });
    }


    testeshow();

  }
]);
