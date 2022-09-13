class Cet < ApplicationRecord

  belongs_to :city
  has_many :users, through: :city
end

