var persons = [
  {
    name: 'Maggie',
    firstName:'Coleman',
    secondName:'Trump',
    birthday: '5/02/1970',
    cars:[
      {
        brand: 'Nissan',
        model: 'Tsuru',
        year: '2010',
        color: 'white'
      }
    ]
  },
  {
    name: 'Houston',
    firstName: 'Have',
    secondName: 'Trouble',
    birthday: '13/12/2000',
    cars: [
      {
        brand: 'Volkswagen',
        model: 'sedan',
        year: '1958',
        color: 'white'
      },
      {
        brand: 'Volkswagen',
        model: 'combi',
        year: '1945',
        color: 'pink'
      },
      {
        brand: 'Nissan',
        model: 'sentra',
        year: '2010',
        color: 'grey'
      }
    ]
  }
];

angular.module('App', [])
.controller('MainController', function($scope) {
  var selectedIndex = -1;
  $scope.person = {};

$scope.registerPerson = function(p){
    p.cars = [];
    persons.push(p);
    $scope.person = {};
  }
  $scope.persons = persons;

  $scope.editPerson = function(p, index){
    $scope.selectedPerson = {};
    $scope.newcar = {};
    angular.copy(p, $scope.selectedPerson);
    selectedIndex = index;
  }


$scope.updatePerson = function(p){
    $scope.persons[selectedIndex] = p;
    $('#dialog-edit-person').modal('hide');
  }





});