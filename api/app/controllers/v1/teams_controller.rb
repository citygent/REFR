class V1::TeamsController < ApplicationController

  def index 
    render json: Team.all
  end

  def create
    @team = Team.new(team_params)
    puts params
    if @team.save
      render json: @team
    end
  end

  def show
    render json: Team.find(params[:id])
    # binding.pry
  end


  private
    # Secure innit.
    def team_params
      params.require(:team).permit(:name, :city)
    end

end
