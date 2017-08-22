# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  artwork_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :author_id, :artwork_id, :body, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :User

  belongs_to :artwork,
  foreign_key: :artwork_id,
  primary_key: :id,
  class_name: :Artwork
end
