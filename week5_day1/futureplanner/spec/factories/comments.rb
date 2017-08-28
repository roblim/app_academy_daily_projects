# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  goal_id    :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :comment do
    
  end
end
