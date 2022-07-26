Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

	root to: 'root#index'
  # Send default to home route for react-router
  get '*path', to: 'root#index', constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
