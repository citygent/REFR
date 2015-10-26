# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

t1 = Team.create(name: 'Clerks', city: 'London')
t2 = Team.create(name: 'Westway', city: 'London')
t3 = Team.create(name: 'Much Jokes', city: 'London')

# ==========================================================

p1 = Player.create(name: 'Felix', team: t1)
p2 = Player.create(name: 'Nesbit', team: t1)
p3 = Player.create(name: 'Jimmy', team: t1)

p4 = Player.create(name: 'Phil', team: t2)
p5 = Player.create(name: 'Vit', team: t2)
p6 = Player.create(name: 'Victor', team: t2)

p7 = Player.create(name: 'Miles', team: t3)
p8 = Player.create(name: 'Shane', team: t3)
p9 = Player.create(name: 'Danielle', team: t3)

# ==========================================================

f1 = Game.create(team1: t1, team2: t2)
f2 = Game.create(team1: t1, team2: t3)
f3 = Game.create(team1: t2, team2: t3)

# ==========================================================

f3goals = Goal.create([ # 5 - 3
  {game: f3, player: p8},
  {game: f3, player: p7},
  {game: f3, player: p9},
  {game: f3, player: p9},
  {game: f3, player: p9},
  {game: f3, player: p5}
  ])
f2goals = Goal.create([ # 3 - 1
  {game: f2, player: p1},
  {game: f2, player: p1},
  {game: f2, player: p7},
  {game: f2, player: p3}
  ])
f1goals = Goal.create([ # 3 - 1
  {game: f1, player: p4},
  {game: f1, player: p1},
  {game: f1, player: p2},
  {game: f1, player: p3}
  ])

puts "seeded with #{Player.all.count} players, and #{Team.all.count} teams, they have played #{Game.all.count} games. #{Goal.all.count} goals were scored. "