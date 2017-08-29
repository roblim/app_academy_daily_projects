class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_username(user_params[:username])
    unless user
      flash[:errors] = "Invalid username or password"
      render :new
      return
    end

    if user.is_password?(user_params[:password])
      log_in!(user)
    else
      flash[:errors] = "Invalid username or password"
      render :new
    end
  end

  def destroy
    log_out!
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
