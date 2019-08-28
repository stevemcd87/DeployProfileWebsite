Rails.application.routes.draw do
  resources :profiles, except: [:show] do
    resources :life_stories, except: [:show]
  end
  get 'hello_world', to: 'hello_world#index'
  get 'about-me', to: 'hello_world#index'
  get 'about-me/*life_story', to: 'hello_world#index'
  get 'blogs', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
