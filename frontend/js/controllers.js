angular.module('Refr')
  .controller('MainCtrl', MainCtrl)
  .controller('NewGameCtrl', NewGameCtrl)

NewGameCtrl.$inject = ['$http'];

function MainCtrl() {
  this.title = 'better than the back of a fag packet'
}

function NewGameCtrl($http) {
  var self = this;

  self.formParams = {};
  self.allTeams = [];

  self.addTeam = addTeam
  function addTeam() {
    $http
      .post('http://localhost:3000/v1/teams', self.newTeam)
      .then(function(response) {
        self.allTeams.push(response.data)
      })
    self.newTeam = {};
  }

  self.playersTeam1 = []
  self.getPlayers1 = getPlayers1
  function getPlayers1(TeamId) {
    $http
      .get('http://localhost:3000/v1/teams/'+ TeamId +'/players')
      .then(function(response, err) {
        console.log('response', response.data)
        if (err) console.log(err);
        self.playersTeam1 = response.data;
      })
  }
  // I AM AWARE THESE TWO FUNCTIONS COULD BE REFACTORED INTO ONE. 
  self.playersTeam2 = []
  self.getPlayers2 = getPlayers2
  function getPlayers2(TeamId) {
    $http
      .get('http://localhost:3000/v1/teams/'+ TeamId +'/players')
      .then(function(response, err) {
        console.log('response', response.data)
        if (err) console.log(err);
        self.playersTeam2 = response.data;
      })
  }

  function getTeams() {
    $http
      .get('http://localhost:3000/v1/teams')
      .then(function(response, err) {
        console.log(response.data)
        if (err) console.log(err);
        self.allTeams = response.data;
      })
  }
  getTeams()


  self.submitNewGameForm = submitNewGameForm
  function submitNewGameForm() {
    console.log('Whole Game Form Submitted')
  }


}