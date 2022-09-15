class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      # t.string :username
      t.string :password_digest
      # t.string :address
      t.string :cet
      # t.string :state
      # t.integer :zip
      # t.string :first_name
      # t.string :last_name
      # t.integer :city_id 

      t.belongs_to :cet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
