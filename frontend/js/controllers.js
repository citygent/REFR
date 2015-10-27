angular.module('Refr')
  .controller('MainCtrl', MainCtrl)
  .controller('TeamCtrl', TeamCtrl)

TeamCtrl.$inject = ['$http'];

function MainCtrl() {
  this.title = 'better than the back of a fag packet'

  this.formParams = {}
  
  this.someFunction = someFunction

  function someFunction() {
    console.log('Whole Game Form Submitted')
  }

}

function TeamCtrl($http) {
  this.title = 'Clerks FTW'
  var self = this;
  self.all = [];
  self.showForm = false;
  self.toggleForm = toggleForm
  self.addTeam = addTeam

  function toggleForm() {
    self.showForm = !self.showForm;
  }

  function addTeam() {
    console.log(self.newTeam)
    $http
      .post('http://localhost:3000/v1/teams', self.newTeam)
      .then(function(response) {
        self.all.push(response.data)
      })
    self.newTeam = {};
  }


  function getTeams() {
    $http
      .get('http://localhost:3000/v1/teams')
      .then(function(response, err) {
        if (err) console.log(err);
        console.log(response.data)
        self.all = response.data;
      })
  }
  getTeams()




}