angular.module('todo-app')

.component('addList', {
  templateUrl: 'client/templates/addList.html',
  controller: function($http) {
    let $ctrl = this;
    let dup = false;
    // Checks the list for duplicates
    // let checkForDuplicates = function(lists, list) {
    //   lists.forEach((item) => {
    //     if (item.list === list) {
    //       dup = true;
    //     }
    //   });
    // }
    $ctrl.addList = (list) => {
      // Checks if the list is blank
      if (!list) {
        return alert('Please enter a list');
      }
      // checkForDuplicates($ctrl.lists, list);
      // // Returns a true dup if the input already exists
      // if (dup) {
      //   dup = false;
      //   return alert('That list already exists');
      // }
      // Sets our list to an object that can be posted
      list = {
        list: list,
        tasks: [],
        editing: false // Used to access edit
      };
      $http.post('/api/lists', list)
      .then((res) => {
        $ctrl.lists.push(res.data); // Adds a list to the list list
        $ctrl.list = ''; // Resets the input field upon submission
      })
    }
  },
  bindings: {
    lists: '<'
  }
});