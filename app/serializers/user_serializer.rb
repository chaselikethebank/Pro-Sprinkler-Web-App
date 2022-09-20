class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :cet, :password_digest

belongs_to :cet
end
