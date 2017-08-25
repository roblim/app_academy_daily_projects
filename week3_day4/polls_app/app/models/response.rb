# == Schema Information
#
# Table name: responses
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  answer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Response < ApplicationRecord
  validates :user_id, :answer_id, presence: true
  validate :not_duplicate_response

  belongs_to :respondent,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :answer_choice,
  primary_key: :id,
  foreign_key: :answer_id,
  class_name: :AnswerChoice

  has_one :question,
    through: :answer_choice,
    source: :question

  def sibling_responses
         question
        .responses
        .where.not(id: id)
  end

  def respondent_already_answered?
    sibling_responses.exists?(user_id: user_id)
  end

  def not_duplicate_response
    error_message = "Respondent already answered this question"
    errors[:user_id] << error_message if respondent_already_answered?
  end
end
