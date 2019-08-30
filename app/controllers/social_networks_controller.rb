class SocialNetworksController < ApplicationController
  def new
    @profile = Profile.find(params[:profile_id])
      @social_network =  @profile.social_networks.new
  end

  def create
    @profile = Profile.find(params[:profile_id])
    @social_network =  @profile.social_networks.new(social_network_params)
    if @social_network.save
      redirect_to '/about-me/present'
    else
      render 'new'
    end
  end

  def edit
    # p '======================'
    # p params
    # @profile = Profile.find(params[:profile_id])
    @social_network =  SocialNetwork.find(params[:id])
    p @social_network
  end

  def update
    @social_network = SocialNetwork.find(params[:id])
    if @social_network.update(social_network_params)
      redirect_to '/about-me/present'
    else
      render 'edit'
    end
  end

  private
  def social_network_params
    params.require(:social_network).permit(:name, :url_link)
  end

end
