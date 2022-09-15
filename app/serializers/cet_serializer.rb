class CetSerializer < ActiveModel::Serializer
  attributes :id, :city, :January, :February, :March, :April, :May, :June, :July, :August, :September, :October, :November, :December
  has_one :city
  has_many :users
end
