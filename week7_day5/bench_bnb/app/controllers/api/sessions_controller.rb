class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render :show
    else
      render json: ['Invalid username or password'], status: 401
    end

  end

  def destroy
    unless current_user
      render json: ['No user to log out!'], status: 404
      return
    end
    sign_out
    render json: {}
  end

end
