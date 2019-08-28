class ProfilesController < ApplicationController
  def new
    @profile = Profile.new
  end

  def create
    redirect_to hello_world_path if Profile.all.count >= 1
    @profile = Profile.new(profile_params)
    if @profile.save
      redirect_to hello_world_path
    else
      render 'new'
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :middle_name, :last_name, :email, :phone_number)
  end
end
