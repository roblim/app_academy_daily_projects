class UsersController < ApplicationController
  before_action :already_logged_in, only: [:new]

  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    @user.password = user_params[:password]
    if @user.save
      login_user!
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password, :session_token)
  end
end
