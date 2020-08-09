/*
 * node js, module express, to do list, main js script 
 * work with public/index5.html
 * 
 */

const demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', 'guidService', function($scope, guidService){

    const vm = {};

    vm.list = [
        { _id: guidService.createGuid(), details: 'Demo First Item'},
        { _id: guidService.createGuid(), details: 'Demo second Item'}
    ];

    vm.addItem = function(){
        // * send to server then,
        vm.list.push({
            _id: guidService.createGuid(),
            details: vm.newItemDetails
        });
        vm.newItemDetails = '';
    };

    vm.removeItem = function(itemToRemove){
        vm.list = vm.list.filter((item) => item._id !== itemToRemove._id)
    };

    vm.newItemDetails ='';

    $scope.vm = vm;
}]);

demoApp.service('guidService', function(){
    return {
        createGuid: function(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
                let r = Math.random()*16 | 0;
                let v = c =='x' ? r: (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
});