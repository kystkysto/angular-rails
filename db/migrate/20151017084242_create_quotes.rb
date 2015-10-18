class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.string :content
      t.boolean :active

      t.timestamps null: false
    end
  end
end
