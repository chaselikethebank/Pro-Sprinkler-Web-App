class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :city
  # , :userCity

  # :username, :address, :state, :first_name, :last_name, :city, :zip, :password,

end
