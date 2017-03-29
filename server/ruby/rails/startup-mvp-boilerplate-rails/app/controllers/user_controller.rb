class UserController < ApplicationController
  def dashboard
  end

  def permited?
    authenticate_user!

    true
  end
end
