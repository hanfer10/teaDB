class AddVendorIdToTea < ActiveRecord::Migration[7.0]
  def change
    add_reference :teas, :vendor, null: false, foreign_key: true
  end
end
