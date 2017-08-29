class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user(username, password)
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in!(user)
    user.reset_session_token!
    user.save!
    session[:session_token] = user.session_token
    redirect_to links_path
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end