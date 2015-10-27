class ApplicationController < ActionController::API
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  
  # protect_from_forgery with: :exception
  # This is not best practice, will fix when speaking to someone who understands it!

  before_filter :set_access_control_headers
  # This allows development same-origin-requests to happen.
  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:8080'
  end

end
