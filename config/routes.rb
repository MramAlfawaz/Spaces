Rails.application.routes.draw do

  resources :todo_lists do
    resources :todo_items do
      member do
        patch :complete
      end
    end    
  end
  
  resources :notes
  
  get 'dashboard/space'
  devise_for :users

  get 'welcome/index'

  root "welcome#index"
  # root "todo_lista#index"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end 
