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

require 'rails_helper'

# validations
# associations
# class methods

RSpec.describe User, type: :model do
  subject(:user) { FactoryGirl.build(:user) }

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_uniqueness_of(:session_token) }
  it { should allow_value(nil).for(:password) }

  describe "#password=()" do
    it "sets password_digest for user on initialize" do
      expect(user.password_digest).to_not be_nil
    end
    it "does not persist password to database" do
      expect(user.password).to be_nil
    end
    it "sets @password instance variable" do
      expect(@password).to eq('password')
    end
  end

  describe "#password" do
    it "reads @password instance variable to allow validation" do
      expect(password).to eq('password')
    end
  end

  describe "::find_by_credentials" do
    context "with invalid username" do
      it "returns nil" do
        user.save
        expect(User.find_by_credentials(username: nil)).to be_nil
      end
    end

    context "with valid username but invalid password" do
      it "returns nil" do
        user.save
        expect(User.find_by_credentials(username: user.username, password: '')).to be_nil
      end
    end

    context "with valid credentials" do
      it "returns user" do
        user.save
        expect(User.find_by_credentials(username: user.username, password: user.password)).to eq(user)
      end
    end
  end

  describe "#ensure_session_token" do
    it "sets session_token before validation if not present" do
      expect(user.session_token).to_not be_nil
    end
  end

  describe "#reset_session_token!" do
    it "resets session token" do
      old_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_token)
    end
  end

  it { should have_many(:left_comments) }
  it { should have_many(:received_comments) }
end
