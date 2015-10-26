# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

t1 = Team.create(name: 'Clerks', city: 'London')
t2 = Team.create(name: 'Westway', city: 'London')

p1 = Player.create(name: 'Felix', team: t1)
p2 = Player.create(name: 'Nesbit', team: t1)
p3 = Player.create(name: 'Jimmy', team: t1)
p4 = Player.create(name: 'Phil', team: t2)
p5 = Player.create(name: 'Vit', team: t2)
p6 = Player.create(name: 'Victor', team: t2)

puts "seeded with #{Player.all.count} players, and #{Team.all.count} teams."