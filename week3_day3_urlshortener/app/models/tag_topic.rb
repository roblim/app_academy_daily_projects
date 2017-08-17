# == Schema Information
#
# Table name: tag_topics
#
#  id         :integer          not null, primary key
#  topic_name :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TagTopic < ApplicationRecord
  validates :topic_name, uniqueness: true, presence: true

  has_many :tags,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Tagging

  has_many :urls,
    -> { distinct },
    through: :tags,
    source: :url

  def popular_links
    five_most_pop = self.urls.sort_by { |url| url.num_clicks }.reverse.take(5)
    five_most_pop.each do |url|
      puts "#{url.short_url}: #{url.num_clicks} clicks"
    end
  end
end
