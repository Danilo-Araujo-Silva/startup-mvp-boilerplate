class Public::MainController < ApplicationController

  layout 'subsystem/public'

  def self.controller_path
    'public'
  end
end