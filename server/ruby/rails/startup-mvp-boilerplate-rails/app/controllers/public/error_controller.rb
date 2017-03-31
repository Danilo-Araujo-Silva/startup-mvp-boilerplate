class Public::ErrorController < Public::MainController

  layout 'subsystem/public'

  def not_found
  end

  def permited?
    true
  end
end
