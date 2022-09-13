class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :city

  # :username, :address, :state, :first_name, :last_name, :city, :zip, :password,

end
