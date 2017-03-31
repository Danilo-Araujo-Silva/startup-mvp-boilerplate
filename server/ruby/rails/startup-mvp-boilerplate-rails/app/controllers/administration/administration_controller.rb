class Administration::AdministrationController < ApplicationController

  layout 'subsystem/administration'

  def self.controller_path
    'administration'
  end

  def dashboard
  end

  def permited?
    authenticate_user!

    true
  end
end
