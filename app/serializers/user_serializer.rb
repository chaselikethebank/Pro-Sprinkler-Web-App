class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :cet, :password_digest
  # , :userCity

  # :username, :address, :state, :first_name, :last_name, :city, :zip, :password,
belongs_to :cet
end
