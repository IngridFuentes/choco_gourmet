Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # resources :orders
      # resources :customers
      post "customers/login", to: "customers#login"
      resources :chocolates, :only => [:index, :show]
      resources :orders
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
