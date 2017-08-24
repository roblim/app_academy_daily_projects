class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @current_user = User.find_by_credentials(user_params[:user_name], user_params[:password])
    return nil if @current_user.nil?
    @current_user.reset_session_token!
    session[:session_token] = @current_user.session_token
    redirect_to cats_url
  end

  private
  def user_params
    params.require(:user).permit(:user_name, :password, :session_token)
  end
end
