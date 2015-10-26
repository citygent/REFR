class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.integer :game_id
      t.integer :player_id

      t.timestamps null: false
    end
  end
end
