class ProfileController < ApplicationController
  def create
    @profile = Profile.new(profile_params)

    @profile.save
    redirect_to @profile
  end

  private
    def profile_params
      params.require(:profile).permit(:first_name, :middle_name, :last_name, :email, :phone_number)
    end
end
