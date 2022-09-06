class SystemSerializer < ActiveModel::Serializer
  attributes :id, :zone, :rotor_spray
  has_one :user
end
