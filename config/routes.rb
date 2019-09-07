Rails.application.routes.draw do
  devise_for :admins
  resources :profiles, except: [:index, :show] do
    resources :life_stories, except: [:index, :show]
    resources :social_networks, except: [:index, :show]
    resources :projects, except: [:index, :show]
  end
  root 'hello_world#index'
  # get 'hello_world', to: 'hello_world#index'
  get 'about-me', to: 'hello_world#index'
  get 'about-me/*life_story', to: 'hello_world#index'
  get 'blogs', to: 'hello_world#index'
  get 'portfolio', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
