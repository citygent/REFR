class Team < ActiveRecord::Base
  has_many :games_as_team1, class_name: 'Game', foreign_key: 'team1_id'
  has_many :games_as_team2, class_name: 'Game', foreign_key: 'team2_id'
  has_many :players

def games 
  self.games_as_team1 + self.games_as_team2
end

def goal_count
  self.players.inject(0) {|total, player| total + player.goals.count}
end

end
