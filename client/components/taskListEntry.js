angular.module('todo-app')

.component('taskListEntry', {
  templateUrl: 'client/templates/taskListEntry.html',
  controller: function($http) {
    $ctrl = this;
    $ctrl.toggleEdit = function(list) {
      // Sets the edit value to the opposite of what it currently is (toggle).
      list.editing = !list.editing;
    }
    $ctrl.updateList = function(list) {
      // Checks for empty edit values
      if (!list.list) {
        return alert('Please enter a list');
      }
      list.editing = false;
      list = {
        list: list
      }
      // Send out an update request
      $http.put('/api/lists/' + list.list._id, list).then((res) => {
        $ctrl.toggleEdit(list);
      })
    }
    // Delete a specific list
    $ctrl.deleteList = function(list) {
      $http.delete('/api/lists/' + list._id)
      .then((res) => {
        let i = $ctrl.lists.indexOf(list);
        // Remove the list from the specific list list
        $ctrl.lists.splice(i, 1);
      })
    }
  },
  bindings: {
    list: '<', // Bind the individual list
    lists: '<' // Bind the list list
  }
});