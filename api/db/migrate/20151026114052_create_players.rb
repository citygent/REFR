class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.belongs_to :team, index: true
      t.string :name

      t.timestamps null: false
    end
  end
end
