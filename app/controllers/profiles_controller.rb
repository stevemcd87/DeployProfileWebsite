class ProfilesController < ApplicationController
  def new
    @profile = Profile.new
  end

  def create
    return redirect_to root_path if Profile.all.count >= 1
    @profile = Profile.new(profile_params)
    if @profile.save
      redirect_to hello_world_path
    else
      render 'new'
    end
  end

  def edit
    @profile = Profile.find(params[:id])
  end

  def update
    @profile = Profile.find(params[:id])
    if @profile.update(profile_params)
      redirect_to hello_world_path
    else
      render 'edit'
    end
  end

  def destroy
    @profile = Profile.find(params[:id])

    render json: {profile: nil} if @profile.destroy
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :middle_name, :last_name, :email, :phone_number)
  end
end
