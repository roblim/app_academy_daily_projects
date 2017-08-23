# == Schema Information
#
# Table name: artworks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
  validates :title, :image_url, :artist_id, presence: true
  validates :artist_id, uniqueness: { scope: :title, message: "title must be unique" }

  belongs_to :artist,
    foreign_key: :artist_id,
    primary_key: :id,
    class_name: :User

  has_many :shares_to,
    foreign_key: :artwork_id,
    primary_key: :id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :shares,
    source: :viewer

  has_many :comments,
  foreign_key: :artwork_id,
  primary_key: :id,
  class_name: :Comment,
  dependent: :destroy
end
