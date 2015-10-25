angular.module('Refr', ['ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false) // true not working is something to do with server. Debug later! 
  $stateProvider
    .state('home', {
      url: '/',
      // template: '<h1>hiii</h1>', // Test
      templateUrl: '/views/home.html' // May put in subdir, specify route if doing so!
    })
    .state('game-form', {
      url: '/game-form',
      templateUrl: '/views/new-game-form/game-form.html',
      controller: 'MainCtrl'
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
  //should redirect people to homepage if URL not recognised.
  $urlRouterProvider.otherwise('/');
}