class DevelopmentController < ApplicationController
  def dashboard
  end

  def permited?
    authenticate_user!

    true
  end
end
