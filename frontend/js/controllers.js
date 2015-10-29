angular.module('Refr')
  .controller('MainCtrl', MainCtrl)
  .controller('NewGameCtrl', NewGameCtrl)
  .controller('GamePlayCtrl', GamePlayCtrl)
  .factory('gameService', gameService)

MainCtrl.$inject = ['$timeout', '$scope'];
NewGameCtrl.$inject = ['$http', 'gameService'];
GamePlayCtrl.$inject = ['gameService']

function MainCtrl($timeout, $scope) {
  var self = this;
  self.title = 'better than the back of a fag packet'

}

function GamePlayCtrl(gameService) {
  self = this;
  self.gameTime = gameService.getGameTime()
  self.gameTimePreped = ((self.gameTime * 60000) + Date.now())

  self.title = 'better than the back of a fag packet'
}

function gameService(){
  var self = this;

  self.gameTime = 15; // default.

  var gameService = {
    getGameTime: function() {
      return self.gameTime;
    },
    setGameTime: function(time) {
      self.gameTime = time;
    }
  }
  return gameService;
}

function NewGameCtrl($http, gameService) {
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
  function addPlayer1(teamId) {
    console.log(self.newPlayer1)
    self.newPlayer1.player.team_id = teamId
    $http
      .post('http://localhost:3000/v1/players', self.newPlayer1)
      .then(function(response) {
        self.playersTeam1.push(response.data)
      })
    self.newPlayer1 = {}
  }
  function addPlayer2(teamId) {
    self.newPlayer2.player.team_id = teamId
    $http
      .post('http://localhost:3000/v1/players', self.newPlayer2)
      .then(function(response) {
        self.playersTeam2.push(response.data)
      })
    self.newPlayer2 = {};
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
    gameService.setGameTime(self.formParams.duration)
  }


}