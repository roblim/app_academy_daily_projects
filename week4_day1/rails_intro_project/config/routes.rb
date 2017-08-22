Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users

  # get 'users', to: 'users#index', as: 'users'
  # post 'users', to: 'users#create'
  # get 'users/new', to: 'users#new', as: 'new_user'
  # get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
  # get 'users/:id', to: 'users#show', as: 'user'
  # patch 'users/:id', to: 'users#update'
  # put 'users/:id', to: 'users#update'
  # delete 'users/:id', to: 'users#destroy'

  resources :users, only: [:index, :create, :update, :destroy, :show]

  resources :artworks, only: [:create, :update, :destroy, :show]
  get '/users/:user_id/artworks', to: 'artworks#index'

  resources :artwork_shares, only: [:create, :destroy]

  resources :comments, only: [:create, :destroy]
  get '/users/:user_id/comments', to: 'comments#index'
  get '/artwork/:artwork_id/comments', to: 'comments#index'
end
