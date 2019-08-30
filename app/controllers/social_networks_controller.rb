class SocialNetworksController < ApplicationController
  def new
    @profile = Profile.find(params[:profile_id])
      @social_network =  @profile.social_networks.new
  end

  def create
    @profile = Profile.find(params[:profile_id])
    @social_network =  @profile.social_networks.new(social_network_params)
    if @social_network.save
      redirect_to '/about-me/'
    else
      render 'new'
    end
  end

  def edit
    @social_network =  SocialNetwork.find(params[:id])
  end

  def update
    @social_network = SocialNetwork.find(params[:id])
    if @social_network.update(social_network_params)
      redirect_to '/about-me/'
    else
      render 'edit'
    end
  end

  def destroy
    @social_network = SocialNetwork.find(params[:id])

    render json: {profile: nil} if @social_network.destroy
  end

  private
  def social_network_params
    params.require(:social_network).permit(:name, :url_link)
  end

end
