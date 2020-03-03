class ChangeProductsToProduct < ActiveRecord::Migration[6.0]
  def change
    rename_table :products, :product
  end
end
