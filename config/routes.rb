Rails.application.routes.draw do
  
  resources :cets
  resources :cities
  resources :systems, only: [:index, :show, :create, :update, :destroy]
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  get "/me", to: "users#show_me"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"




end
