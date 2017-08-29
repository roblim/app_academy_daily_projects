class SubsController < ApplicationController
  before_action :require_log_in!
  before_action :require_owner!, only: [:edit, :update]

  def new
  end

  def create
    new_sub = Sub.new(sub_params)
    new_sub.moderator = current_user.id

    if new_sub.save
      redirect_to sub_url(new_sub.id)
    else
      flash[:errors] = new_sub.errors.full_messages
      render :new
    end
  end

  def edit
  end

  def update
    sub_edit = Sub.find_by_id(params[:id])
    if sub_edit.update_attributes(sub_params)
      redirect_to sub_url(params[:id])
    else
      flash[:errors] = sub_edit.errors.full_messages
      render :edit
    end
  end

  def show
    @sub = Sub.find_by_id(params[:id])
    render :show
  end

  def index
    @subs = Sub.all
    render :index
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description)
  end

  def require_owner!
    sub_edit = Sub.find_by_id(params[:id])
    unless current_user == sub_edit.moderator
      flash[:errors] = "You need to be a moderator to edit this sub."
      redirect_to sub_url(params[:id])
    end
  end
end
