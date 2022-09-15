class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :cet
  # , :userCity

  # :username, :address, :state, :first_name, :last_name, :city, :zip, :password,
belongs_to :cet
end
