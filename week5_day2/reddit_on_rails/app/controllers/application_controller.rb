class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_log_in!
    redirect_to new_session_path unless logged_in?
  end

  def log_in!(user)
    user.reset_session_token!
    user.save!
    session[:session_token] = user.session_token
    redirect_to subs_path
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

end
