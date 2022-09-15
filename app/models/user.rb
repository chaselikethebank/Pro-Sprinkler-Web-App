class User < ApplicationRecord


  belongs_to :cet
  has_many :systems
  
  
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true


   
  end
  