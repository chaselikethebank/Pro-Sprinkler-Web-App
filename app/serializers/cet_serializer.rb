class CetSerializer < ActiveModel::Serializer
  attributes :id, :January, :February, :March, :April, :May, :June, :July, :August, :September, :October, :November, :December
  has_one :city
end
