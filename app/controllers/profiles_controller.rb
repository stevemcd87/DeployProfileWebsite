class ProfilesController < ApplicationController
  def show
    @profile = Profile.params[:id]
    render json: @profile
  end

  def create
    redirect_to hello_world_path if Profile.all.count >= 1
    @profile = Profile.new(profile_params)
    p @profile
    # @profile.save
    render json: @profile
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :middle_name, :last_name, :email, :phone_number)
  end
end
