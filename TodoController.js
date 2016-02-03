var app = angular.module('TodoApp', []);

var TodoController = function TodoController ($scope) {

	$scope.todos = [
		{ text: 'Learn Angular JS', done: false },
		{ text: 'Build an app', done: false }
	];

	$scope.getTotalTodos = function () {
		return $scope.todos.length;
	};

	$scope.addTodo = function () {
		$scope.todos.push({text: $scope.formTodoText, done: false});
		$scope.formTodoText = "";
	};

	$scope.clearCompleted = function () {
		for(var i = ($scope.todos.length - 1); i >= 0; i--){
			if($scope.todos[i].done === true){
				$scope.todos.splice(i, 1);
			}
		}
	};

};

app.controller('TodoController', TodoController);