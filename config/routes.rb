Rails.application.routes.draw do
  resources :profiles, except: [:index, :show] do
    resources :life_stories, except: [:index, :show]
    resources :social_networks, except: [:index, :show]
  end
  get 'hello_world', to: 'hello_world#index'
  get 'about-me', to: 'hello_world#index'
  get 'about-me/*life_story', to: 'hello_world#index'
  get 'blogs', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
