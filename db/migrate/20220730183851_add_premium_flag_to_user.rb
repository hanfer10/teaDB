class AddPremiumFlagToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :premium_user, :boolean
  end
end
