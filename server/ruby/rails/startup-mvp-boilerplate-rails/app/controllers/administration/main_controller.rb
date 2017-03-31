class Administration::MainController < ApplicationController

  layout 'subsystem/administration'

  def self.controller_path
    'administration'
  end
end