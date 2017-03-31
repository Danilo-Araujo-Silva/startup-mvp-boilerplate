class Development::DevelopmentController < ApplicationController

  layout 'subsystem/development'

  def self.controller_path
    'development'
  end

  def dashboard
  end

  def permited?
    authenticate_user!

    true
  end
end
