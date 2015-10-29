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

  // var end = new Date(2015, 9, 29, 13, 0, 0, 0)
  // self.timespan = countdown(new Date(), end, -2033)

  // self.counter = 100000
  // self.goals = []

  // self.countdown = function () {
  //   console.log('start')
  //   self.timer = $timeout(function() {
  //     self.counter--;
  //     self.countdown();
  //   }, 1);
  // };

  // self.stop = function () {
  //   console.log('stop')
  //   $timeout.cancel(self.timer);
  //   self.timer = null;
  // };

  // self.goal = function () {
  //   console.log('goal')
  //   self.stop();
  //   self.goals.push(self.counter);
  // };
// ========================================
  // self.counter = 100;
  // var timer;

  // //1000 milliseconds = 1 second

  // self.countdown = function() {
  //     timer = $timeout(function() {
  //        console.log(self.counter);
  //      self.counter--;   
  //      self.countdown();   
  //     }, 1000);
  //   };
         
  // self.stop = function(){
  //    $timeout.cancel(timer);
      
  //     } 
}

function GamePlayCtrl(gameService) {
  self = this;
  self.gameTime = gameService.getGameTime()
}

function gameService(){
  var self = this;

  self.gameTime = 12;

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

  self.test = gameService.getGameTime()
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
    console.log(self.formParams)
    gameService.setGameTime(69)
  }


}