angular.module('todo-app')

.component('addTask', {
  templateUrl: 'client/templates/addTask.html',
  controller: function($http) {
    let $ctrl = this;
    let dup = false;
    // Checks the list for duplicates
    let checkList = function(tasks, task) {
      tasks.forEach((item) => {
        if (item.task === task) {
          dup = true;
        }
      });
    }
  $ctrl.addTask = (task) => {
    // Checks if the task is blank
    if (!task) {
      return alert('Please enter a task');
    }
    checkList($ctrl.tasks, task);
    // Returns a true dup if the input already exists
    if (dup) {
      dup = false;
      return alert('That task already exists');
    }
    // Sets our task to an object that can be posted
    task = {
      task: task,
      editing: false // Used to access edit
    };
    $http.post('/api/tasks', task)
    .then((res) => {
      $ctrl.tasks.push(res.data); // Adds a task to the task list
      $ctrl.task = ''; // Resets the input field upon submission
    })
  }
});