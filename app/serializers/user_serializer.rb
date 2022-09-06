class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password, :address, :city, :state, :zip, :first_name, :last_name
end
