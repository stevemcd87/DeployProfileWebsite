class ApplicationController < ActionController::Base
  # before_action :authenticate_admin!
  protect_from_forgery with: :exception
  protect_from_forgery unless: -> { request.format.json? }
end
