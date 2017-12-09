angular.module('todo-app')

.component('taskListEntry', {
  templateUrl: 'client/templates/taskListEntry.html',
  controller: function($http) {
    $ctrl = this;
    $ctrl.toggleEdit = function(task) {
      // Sets the edit value to the opposite of what it currently is (toggle).
      task.editing = !task.editing;
    }
    $ctrl.updateTask = function(task) {
      // Checks for empty edit values
      if (!task.task) {
        return alert('Please enter a task');
      }
      task.editing = false;
      task = {
        task: task
      }
      // Send out an update request
      $http.put('/api/tasks/' + task.task._id, task).then((res) => {
        $ctrl.toggleEdit(task);
      })
    }
    // Delete a specific task
    $ctrl.deleteTask = function(task) {
      $http.delete('/api/tasks/' + task._id)
      .then((res) => {
        let i = $ctrl.tasks.indexOf(task);
        // Remove the task from the specific task list
        $ctrl.tasks.splice(i, 1);
      })
    }
  },
  bindings: {
    task: '<', // Bind the individual task
    tasks: '<' // Bind the task list
  }
});