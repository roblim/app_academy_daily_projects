# == Schema Information
#
# Table name: taggings
#
#  id               :integer          not null, primary key
#  topic_id         :integer          not null
#  shortened_url_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Tagging < ApplicationRecord
  validates :topic_id, :shortened_url_id, presence: true

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :TagTopic

  belongs_to :url,
    primary_key: :id,
    foreign_key: :shortened_url_id,
    class_name: :ShortenedUrl

end
