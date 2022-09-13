class User < ApplicationRecord


  belongs_to :city
  has_many :systems
  has_many :cets, through: :city
  
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true


   
  end
  