Rails.application.routes.draw do

  get 'tool/calculator'
  resources :events
  resources :photos
  resources :weathers
  resources :favorites
  resources :todo_lists do
    resources :todo_items do
      member do
        patch :complete
      end
    end    
  end
  
  resources :notes

  # authenticated :user do
  #   get 'notes#index', as: "authenticated_root"
  # end
  
  get "dashboard/space"
  devise_for :users

  root "welcome#index"
  # get "/*path" , to: "welcome/index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end 
