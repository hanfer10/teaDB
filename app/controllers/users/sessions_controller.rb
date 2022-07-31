# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # GET /resource/sign_in
  def new
    render status: :unauthorized
  end

  # POST /resource/sign_in
  def create
    super do |user|
      render json: user.to_json
      return
    end
  end

  def auth
    if user_signed_in?
      render json: current_user.to_json
    else
      render status: :unauthorized, json: { error: 'Not signed in' }
    end
  end
end
