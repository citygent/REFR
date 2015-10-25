angular.module('Refr')
  .controller('MainCtrl', MainCtrl)
  .controller('TeamCtrl', TeamCtrl)

function MainCtrl() {
  this.title = 'better than the back of a fag packet'

  this.formTeam = {}

}

function TeamCtrl() {
  this.title = 'Clerks FTW'
}