Rails.application.routes.draw do
  get 'user/dashboard'

  get 'development/dashboard'

  get 'administration/dashboard'

  namespace :public do
    get 'error/not_found'
  end

  get 'public/about'

  get 'public/careers'

  get 'public/help'

  get 'public/privacy_policy'

  get 'public/terms_of_service'

  get 'public/landing'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
