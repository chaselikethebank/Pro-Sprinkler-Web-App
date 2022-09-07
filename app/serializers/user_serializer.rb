class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :city, :zip, 

  # :username, :address, :state, :first_name, :last_name

end
