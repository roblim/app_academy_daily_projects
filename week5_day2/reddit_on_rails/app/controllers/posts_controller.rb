class PostsController < ApplicationController
  before_action :require_log_in!, except: [:show]
  before_action :require_owner!, only: [:edit, :update, :destroy]

  def new
  end

  def create
    new_post = Post.new(post_params)
    new_post.author_id = current_user.id
    if new_post.save
      redirect_to post_url(new_post.id)
    else
      flash[:errors].new_post.errors.full_messages
    end
  end

  def edit
    render :edit
  end

  def update
    @post = Post.find_by_id(params[:id])
    if post.update_attributes(post_params)
      redirect_to post_url(post.id)
    else
      flash[:errors] = post.errors.full_messages
      render :edit
    end
  end

  def show
  end

  def destroy
    Post.find_by_id(params[:id]).try(:destroy)
    redirect_to subs_url
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content, :sub_id, :author_id)
  end

  def require_owner!
    post = Post.find_by_id(params[:id])
    unless current_user == sub_edit.moderator
      flash[:errors] = "You need to be the author to edit this post."
      redirect_to post_url(params[:id])
    end
  end
end
