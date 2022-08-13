class CreateFavoritedTeas < ActiveRecord::Migration[7.0]
  def change
    create_table :favorited_teas do |t|
      t.string :personal_notes
      t.decimal :user_rating

      t.timestamps
    end
  end
end
