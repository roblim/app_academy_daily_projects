# == Schema Information
#
# Table name: shortened_urls
#
#  id         :integer          not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShortenedUrl < ApplicationRecord
  validates :short_url, uniqueness: true, presence: true
  validates :long_url, :user_id, presence: true
  validate :no_spamming

  def no_spamming
    # debugger
    user = self.submitter
    submissions = user.submitted_urls
    return if submissions.count < 5
    # seconds = Time.now - submissions[-4]
    if Time.now - submissions[-4].created_at < 120
      errors[:user_id] << "NO SPAMMING!!!!!!!!!!!!! ASSHOLE."
    end
  end

  def self.random_code
    code = SecureRandom.urlsafe_base64

    while ShortenedUrl.exists?(short_url: code)
      code = SecureRandom.urlsafe_base64
    end
    code
  end

  def self.shorten(user, url)
    code =  ShortenedUrl.random_code
    short = ShortenedUrl.new(short_url: code, long_url: url, user_id: user.id)
    saved = short.save
    raise ArgumentError unless saved
  end

  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :visits,
    primary_key: :id,
    foreign_key: :shortened_url_id,
    class_name: :Visit

  has_many :visitors,
    -> { distinct },
    through: :visits,
    source: :visitor

  has_many :tags,
    primary_key: :id,
    foreign_key: :shortened_url_id,
    class_name: :Tagging

  has_many :topics,
    through: :tags,
    source: :topic

    def num_clicks
      self.visits.count
    end

    def num_uniques
      self.visitors.count
      # visit_rows = Visit.select { |visit| visit.shortened_url_id == self.id }
    end


end
