class V1::PlayersController < ApplicationController

  def index 
    render json: Player.all
  end

  def create
    binding.pry
    @player = Player.new(player_params)
    if @player.save
      render json: @player
    end
  end

  def show
    render json: Player.find(params[:id])
  end

  def team
    @team = Player.find(params[:id]).team
    render json: @team
  end


  private
    # Secure innit.
    def player_params
      params.require(:player).permit(:name, :team_id)
    end

end