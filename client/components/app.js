angular.module('todo-app', [])

.component('app', {
  templateUrl: 'client/templates/app.html',
  controller: function($http) {
    // Maintains the 'this' scope
    let $ctrl = this;
    $ctrl.lists = [];
    $http.get('/api/lists').then(function(res) {
      res.data.forEach((obj) => {
        $ctrl.lists.push(obj);
      })
    })
  }
});