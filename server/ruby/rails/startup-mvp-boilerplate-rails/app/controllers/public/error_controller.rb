class Public::ErrorController < ApplicationController

  layout 'subsystem/public'

  def not_found
  end

  def permited?
    true
  end
end
