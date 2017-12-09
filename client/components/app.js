angular.module('todo-app', []);

.component('app', {
  templateUrl: 'client/templates/app.html',
  controller: function($http) {
    // Maintains the 'this' scope
    let $ctrl = this;
    $ctrl.tasks = [];
    $gttp.get('/api/tasks').then(function(res) {
      res.data.forEach((obj) => {
        $ctrl.tasks.push(obj);
      })
    })
  }
});