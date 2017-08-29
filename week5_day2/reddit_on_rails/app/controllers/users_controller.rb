class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    new_user = User.new(user_params)
    if new_user.save
      log_in!(new_user)
    else
      flash[:errors] = new_user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
