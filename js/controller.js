angular.module('App', [])
.controller('MainController', function($scope) {
    $scope.person = {
       name: '',
       firstName: '',
       secondName: '',
       birthday: ""
    };
});