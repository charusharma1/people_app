(function () {
  "use strict";

  angular.module("app").controller("exampleCtrl", function($scope) {

    $scope.people = [
    {
      name: "Amy",
      bio: "Bio",
      bioVisible: true
    },
    {
      name: "Betty",
      bio: "Bio",
      bioVisible: true
    },
    {
      name: "Charlotte",
      bio: "Bio",
      bioVisible: true
    }
    ];
    $scope.numPeople=3
    $scope.addPerson = function(person) {
      if (person) {
        
        numPeople++;
        $scope.people.push(person);
        return numPeople;
        
      }
    }

    $scope.ifPositive = function(person) {
      return person.name.indexOf("stupid") === -1;
    }

    $scope.completePerson = function(index) {
      $scope.people.splice(index, 1);
    }


    window.$scope = $scope;


  });
}());