class ApplicationController < ActionController::Base
  protect_from_forgery
   rescue_from CanCan::AccessDenied do |exception|
    redirect_to main_app.root_path, :alert => exception.message
  end
  
def local_request?
  true #set to false in production
end

def rescue_action_in_public(exception)
  case exception
  when ActiveRecord::RecordNotFound
    render :file => "#{Rails.root.join}/public/404.html", :status => 404
  else
    super
  end
end


end
