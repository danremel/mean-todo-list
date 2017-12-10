angular.module('todo-app')

.component('taskList', {
  templateUrl: 'client/templates/taskList.html',
  controller: function() {},
  bindings: {
    lists: '<'
  }
});