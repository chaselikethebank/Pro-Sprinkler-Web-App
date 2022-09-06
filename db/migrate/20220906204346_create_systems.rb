class CreateSystems < ActiveRecord::Migration[6.1]
  def change
    create_table :systems do |t|
      t.integer :zone
      t.string :rotor_spray
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
