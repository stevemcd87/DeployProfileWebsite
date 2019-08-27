class ProfileController < ApplicationController
  def show
    @profile = Profile.first
    render json: @profile
  end

  def create
    redirect_to hello_world_path if Profile.all.count >= 1
    @profile = Profile.new(profile_params)
    @profile.save
    redirect_to hello_world_path
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :middle_name, :last_name, :email, :phone_number)
  end

end
