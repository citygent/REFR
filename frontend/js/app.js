angular.module('Refr', ['ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true) // Start server with angular-http-server :)
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html' // May put in subdir, specify route if doing so!
    })
    .state('game-form', {
      url: '/game-form',
      templateUrl: '/views/new-game-form/game-form.html',
      controller: 'NewGameCtrl as NewGame'
    }) // nested state, so url will be /game-form/teams
      .state('game-form.teams', {
        url: '/teams',
        templateUrl: '/views/new-game-form/game-form-teams.html'
      })
      .state('game-form.players', {
        url: '/players',
        templateUrl: '/views/new-game-form/game-form-players.html'
      })
      .state('game-form.timing', {
        url: '/timing',
        templateUrl: '/views/new-game-form/game-form-timing.html'
      })
      .state('game-form.refs', {
        url: '/refs',
        templateUrl: '/views/new-game-form/game-form-refs.html'
      })
      .state('game-form.summary', {
        url: '/summary',
        templateUrl: '/views/new-game-form/game-form-summarysubmit.html'
      })
  //should redirect people to homepage if URL not recognised.
  $urlRouterProvider.otherwise('/');
}