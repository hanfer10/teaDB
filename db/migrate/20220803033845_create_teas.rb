class CreateTeas < ActiveRecord::Migration[7.0]
  def change
    create_table :teas do |t|
      t.string :name
      t.string :description
      t.string :price
      t.string :category
      t.decimal :user_rating
      t.decimal :vendor_rating
      t.string :vendor_item_url
      t.string :vendor_item_notes

      t.timestamps
    end
  end
end
