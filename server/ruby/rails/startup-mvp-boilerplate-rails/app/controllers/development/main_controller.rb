class Development::MainController < ApplicationController

  layout 'subsystem/development'

  def self.controller_path
    'development'
  end
end