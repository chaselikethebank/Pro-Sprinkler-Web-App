class CreateCets < ActiveRecord::Migration[6.1]
  def change
    create_table :cets do |t|
      t.integer :January
      t.integer :February
      t.integer :March
      t.integer :April
      t.integer :May
      t.integer :June
      t.integer :July
      t.integer :August
      t.integer :September
      t.integer :October
      t.integer :November
      t.integer :December
      t.belongs_to :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
