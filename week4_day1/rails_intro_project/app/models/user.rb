# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string           not null
#

class User < ApplicationRecord
  validates :username, presence: true

  has_many :artworks,
    foreign_key: :artist_id,
    primary_key: :id,
    class_name: :Artwork,
    dependent: :destroy

  has_many :shares_from,
    foreign_key: :viewer_id,
    primary_key: :id,
    class_name: :ArtworkShare

  has_many :shared_artworks,
    through: :shares_from,
    source: :artwork

  has_many :artwork_shares,
    through: :artworks,
    source: :shares_to,
    dependent: :destroy

  has_many :comments,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :Comment,
  dependent: :destroy
end
