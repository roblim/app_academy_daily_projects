class ArtworksController < ApplicationController

  def index
    artworks = Artwork.find_by(artist_id: params[:user_id])
    artist = User.find(params[:user_id])
    owned_and_shared = [artworks] + artist.shared_artworks
    render json: owned_and_shared
  end

  def create
    new_art = Artwork.new(artwork_params)

    if new_art.save
      render json: new_art
    else
      render json: new_art.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end

  def update
    artwork = Artwork.find(params[:id])
    artwork.update_attributes(artwork_params)
    render json: artwork
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :artist_id, :image_url)
  end
end
