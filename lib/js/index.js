(function() {
  'use strict';
  var app;

  angular.module("scApp", ["sc.app.helpers", "pouchdb"]).controller("MainCtrl", [
     "$scope", "$scModal", "$timeout", "$scTarget", "pouchDB", function($scope, $scModal, $timeout, $scTarget, pouchDB) {
      var testeshow;
      $scope.db = pouchDB('dbencomendas');
      $scope.db.changes({
        since: 'now',
        live: true
      }).on('change', testeshow);
      $scope.addEncomenda = function(value) {
        var encomenda;
        encomenda = {
          _id: (new Date).toISOString(),
          tipo: value.tipo,
          nomedest: value.nomedest,
          nomeremet: value.nomeremet,
          detalhes: value.detalhes,
          entregue: false
        };
        $scope.db.put(encomenda, function(err, result) {
          if (!err) {
            console.log('DEU CERTO CARAI, O PUT.');
            $scope.encomendaForm.$setPristine();
          }
          
        });

      };
      $scope.deleteEncomenda = function(id) {
        $scope.db.remove(id);
        console.log(id);
      };

      $scope.entregaEncomenda = function(encomenda) {
        encomenda.entregue = true;
        $scope.db.put(encomenda);
        console.log(encomenda);
      }

      function testeshow() {
        $scope.db.allDocs({
          include_docs: true,
          descending: true
        }).then(function(doc) {
          $scope.showEncomendas = doc;
        })["catch"](function(err) {
          console.log(err);
        });
      };
      testeshow();

      $scope.openModal = function(lista) {
        lista.opened = !lista.opened;
        if (lista.opened) {
          lista.bgColorAcc = 'background-color: #337ab7;';
          lista.bColor = 'border-right: 1px solid #438ccb;';
          return lista.txtColor = 'color: white;';
        } else {
          lista.bgColorAcc = 'background-color: #f3f3f4;';
          lista.bColor = 'border-right: 1px solid #e0e2e3;';
          return lista.txtColor = void 0;
        }
      };

      $scope.encomendas = [
        {
          _id:0,
          nome: "Encomnda João"
        }
      ]


      $scope.addEncomendaModal = new $scModal();

    }
  ]);



}).call(this);
