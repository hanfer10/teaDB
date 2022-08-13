class CreateVendors < ActiveRecord::Migration[7.0]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :url
      t.string :description
      t.string :website_thumbnail

      t.timestamps
    end
  end
end
