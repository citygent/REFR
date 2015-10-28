angular.module('Refr')
  .controller('MainCtrl', MainCtrl)
  .controller('NewGameCtrl', NewGameCtrl)

MainCtrl.$inject = ['$timeout'];
NewGameCtrl.$inject = ['$http'];

function MainCtrl($timeout) {
  var self = this;
  self.title = 'better than the back of a fag packet'

  self.counter = 100;
  var timer;

  //1000 milliseconds = 1 second

  self.countdown = function() {
      timer = $timeout(function() {
         console.log(self.counter);
       self.counter--;   
       self.countdown();   
      }, 1000);
    };
         
  self.stop = function(){
     $timeout.cancel(timer);
      
      } 
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

  self.addPlayer1 = addPlayer1
  self.addPlayer2 = addPlayer2
  // Not very dry I know but time...
  self.newPlayer1 = {};
  self.newPlayer2 = {};
  function addPlayer1(x) {
    self.newPlayer.player.team_id = x
    $http
      .post('http://localhost:3000/v1/players', self.newPlayer)
      .then(function(response) {
        self.playersTeam1.push(response.data)
      })
  }
  function addPlayer2(x) {
    self.newPlayer.player.team_id = x
    $http
      .post('http://localhost:3000/v1/players', self.newPlayer)
      .then(function(response) {
        self.playersTeam2.push(response.data)
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