// angular.module('todo-app')

// .component('addTask', {
//   templateUrl: 'client/templates/addTask.html',
//   controller: function($http) {
//     let $ctrl = this;
 
//     $ctrl.addTask = (list) => {
//       // Checks if the list is blank
//       if (!list) {
//         return alert('Please enter a list');
//       }
      
//       // Sets our list to an object that can be posted
//       list = {
//         list: list,
//         editing: false // Used to access edit
//       };
//       $http.post('/api/lists', list)
//       .then((res) => {
//         $ctrl.lists.push(res.data); // Adds a list to the list list
//         $ctrl.list = ''; // Resets the input field upon submission
//       })
//     }
//   },
//   bindings: {
//     lists: '<'
//   }
// });