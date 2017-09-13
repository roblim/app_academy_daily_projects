Rails.application.routes.draw do
  # Your routes here!
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :guests, only: [:show, :index] do
      resources :gifts, only: [:index]
    end
    resources :invitations, only: [:index, :show]
    resources :parties, only: [:index, :show]
    resources :gifts, only: [:show]
  end
end
