/*
 * node js, module express, to do list, main js script, plus RESTful API
 * P.193 Listing 9-10
 * 
 * Front end script.
 * 
 */

const demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', 'todoWebService', function($scope, todoWebService){

    // * start a view model
    let vm = {};
    vm.list =[];

    // * strt the initial load of lists
    todoWebService.getItems().then(function(response){
        vm.list = response.data.items;
    });

    vm.addItem = function(){
        let item = {
            details: vm.newItemDetails
        };

        // * clear it from the UI
        vm.newItemDetails = '';

        // * Send the request to the server and add the item once done
        todoWebService.addItem(item).then(function(response){
            vm.list.push({
                _id: response.data.itemId,
                details: item.details
            });
        });
    };

    vm.removeItem = function(itemToRemove){
        // * remove it from the list and send the server request
        vm.list = vm.list.filter((item) => item._id !== itemToRemove._id);
        todoWebService.removeItem(itemToRemove);
    };

    // * For new items
    vm.newItemDetails = '';

    // * expose the vm using the $scope
    $scope.vm = vm;

}]);

demoApp.service('todoWebService', ['$http', function($http){
    let root = '/todo';
    return {
        getItems: function(){
            return $http.get(root);
        },
        addItem: function(){
            return $http.post(root, item);
        },
        removeItem: function(){
            return $http.delete(root + '/' + item._id);
        }
    }
}]);
