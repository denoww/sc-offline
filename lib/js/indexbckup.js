'use strict';

var app;

app = angular.module("app", ['pouchdb']);

app.controller("MainCtrl", [
  "$scope", "pouchDB", function($scope, pouchDB) {
    var bind, db, doc, error, get;
    $scope.db = pouchDB('dbname');




    $scope.db.changes({
      since: 'now',
      live: true
    }).on('change',testeshow)
      .on('change',showTodos)
      

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
    function testeshow(){
      $scope.db.allDocs({include_docs:true, descending:true}, function(err, doc){
        $scope.teste = doc;
      });
    }

    function showTodos() {
      $scope.db.allDocs({include_docs: true, descending: true}).then(function(doc) {
        redrawTodosUI(doc.rows);
      }).catch(function (err) {
        console.log(err);
      });
    }

    function checkboxChanged(todo, event) {
      todo.completed = event.target.checked;
      console.log(todo);
      $scope.todocheck = todo;
      $scope.db.put(todo);
    }

    function todoDblClicked(todo) {
      var div = document.getElementById('li_' + todo._id);
      var inputEditTodo = document.getElementById('input_' + todo._id);
      div.className = 'editing';
      inputEditTodo.focus();
    }

    function deleteButtonPressed(todo) {
      $scope.db.remove(todo);
    }

    function todoBlurred(todo, event) {
      var trimmedText = event.target.value.trim();
      if (!trimmedText){
        $scope.db.remove(todo);
      } else {
        todo.title = trimmedText;
        $scope.db.put(todo);
      }
    }

    function todoKeyPressed(){

    }

    function createTodoListItem(todo) {
      var checkbox = document.createElement('input');
      checkbox.className  ='toggle';
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', checkboxChanged.bind(this, todo));

      var label = document.createElement('label');
      label.appendChild( document.createTextNode(todo.title));
      label.addEventListener('dblclick', todoDblClicked.bind(this, todo));

      var deleteLink = document.createElement('button');
      deleteLink.className = 'destroy';
      deleteLink.addEventListener( 'click', deleteButtonPressed.bind(this, todo));

      var divDisplay = document.createElement('div');
      divDisplay.className = 'view';
      divDisplay.appendChild(checkbox);
      divDisplay.appendChild(label);
      divDisplay.appendChild(deleteLink);

      var inputEditTodo = document.createElement('input');
      inputEditTodo.id = 'input_' + todo._id;
      inputEditTodo.className = 'edit';
      inputEditTodo.value = todo.title;
      inputEditTodo.addEventListener('keypress', todoKeyPressed.bind(this, todo));
      inputEditTodo.addEventListener('blur', todoBlurred.bind(this, todo));

      var li = document.createElement('li');
      li.id = 'li_' + todo._id;
      li.appendChild(divDisplay);
      li.appendChild(inputEditTodo);

      if (todo.completed) {
        li.className += 'complete';
        checkbox.checked = true;
      }

      return li;
    }

    function redrawTodosUI(todos) {
      var ul = document.getElementById('todo-list');
      ul.innerHTML = '';
      todos.forEach(function(todo) {
        ul.appendChild(createTodoListItem(todo.doc));
      });
    }



    
    $scope.teste = [
      {
        _id: "0",
        nome: "teste1"
      }
    ];

    testeshow();
    showTodos();
  }
]);
