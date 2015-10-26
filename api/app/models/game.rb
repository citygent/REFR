class Game < ActiveRecord::Base
  belongs_to :team1, class_name: 'Team', foreign_key: 'team1_id'
  belongs_to :team2, class_name: 'Team', foreign_key: 'team2_id'
  has_many :goals

  def all_players
    self.team1.players + self.team2.players 
  end

  def all_teams
    [self.team1] + [self.team2]
  end

  def goals_by_team
    all_goals = self.goals
    all_goals.each_with_object(Hash.new(0)) {|goal, counts| counts[goal.player.team.name] += 1 }
  end





end

