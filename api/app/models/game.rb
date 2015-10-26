class Game < ActiveRecord::Base
  belongs_to :team1, class_name: 'Team', foreign_key: 'team1_id'
  belongs_to :team2, class_name: 'Team', foreign_key: 'team2_id'

def all_players
  self.team1.players + self.team2.players 
end

def all_teams
  [self.team1] + [self.team2]
end



end