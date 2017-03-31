class Development::DevelopmentController < Development::MainController

  def dashboard
  end

  def permited?
    authenticate_user!

    true
  end
end
