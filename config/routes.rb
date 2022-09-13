Rails.application.routes.draw do
  
  resources :cets, only: [:index, :show]
  resources :cities, only: [:index, :show]
  resources :systems, only: [:index, :show, :create, :update, :destroy]
  resources :usersservice postgresql stop
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/cities", to: "city#show"
  # get "/cets", to: "cet#show"




end
