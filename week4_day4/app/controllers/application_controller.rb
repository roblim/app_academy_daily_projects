class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  helper_method :current_user, :login_user!

  def already_logged_in
    redirect_to cats_url if current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login_user!
    @user = User.find_by_credentials(user_params[:user_name], user_params[:password])
    return nil if @user.nil?
    @user.reset_session_token!
    session[:session_token] = @user.session_token
    redirect_to cats_url
  end

end
