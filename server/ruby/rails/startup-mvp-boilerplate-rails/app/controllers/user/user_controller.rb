class User::UserController < ApplicationController

  layout 'subsystem/user'

  def self.controller_path
    'user'
  end

  def dashboard
  end

  def permited?
    authenticate_user!

    true
  end
end
