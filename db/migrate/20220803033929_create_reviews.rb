class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :description
      t.decimal :rating
      t.string :summary

      t.timestamps
    end
  end
end
