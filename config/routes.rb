Rails.application.routes.draw do
  resources :profiles, only: [:create, :show]
  get 'hello_world', to: 'hello_world#index'
  get 'about-me', to: 'hello_world#index'
  get 'about-me/*story', to: 'hello_world#index'
  get 'blogs', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
