class SessionsController < ApplicationController
  before_action :already_logged_in, only: [:new]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:user_name], user_params[:password])
    return nil if @user.nil?
    @user.reset_session_token!
    session[:session_token] = @user.session_token
    redirect_to cats_url
  end

  def destroy
    return if current_user.nil?
    @current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to root_url
  end

  private
  def user_params
    params.require(:user).permit(:user_name, :password, :session_token)
  end
end
