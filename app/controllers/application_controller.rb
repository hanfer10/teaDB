class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email])

    devise_parameter_sanitizer.permit(:sign_in) do |user_params|
      user_params.permit(:username, :password, :remember_me)
    end
  end
end
