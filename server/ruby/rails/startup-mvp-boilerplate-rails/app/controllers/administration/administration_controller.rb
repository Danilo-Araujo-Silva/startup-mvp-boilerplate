class Administration::AdministrationController < Administration::MainController

  def dashboard
  end

  def permited?
    authenticate_user!

    true
  end
end
