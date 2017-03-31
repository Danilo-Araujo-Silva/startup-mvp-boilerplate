class User::MainController < ApplicationController

  layout 'subsystem/user'

  def self.controller_path
    'user'
  end
end