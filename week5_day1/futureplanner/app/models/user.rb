# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token

  has_many :left_comments,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :Comment

  has_many :goals,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :Goal

  has_many :received_comments,
    through: :goals,
    source: :comments

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    reset_session_token! unless self.session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    if BCrypt::Password.new(user.password_digest).is_password?(password)
      return user
    else
      return nil
    end
  end

end
