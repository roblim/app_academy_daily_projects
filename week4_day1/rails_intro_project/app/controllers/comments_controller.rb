class CommentsController < ApplicationController
  def index
    if params[:user_id]
      comments = User.find(params[:user_id]).comments
      render json: comments
    else
      comments = Artwork.find(params[:artwork_id]).comments
      render json: comments
    end
  end

  def create
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :artwork_id, :body)
  end
end
