class ApplicationController < ActionController::Base

  def index
    render :'Index/index.html.erb'
  end
end
