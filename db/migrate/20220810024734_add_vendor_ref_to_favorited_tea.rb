class AddVendorRefToFavoritedTea < ActiveRecord::Migration[7.0]
  def change
    add_reference :favorited_teas, :vendor, null: false, foreign_key: true
  end
end
