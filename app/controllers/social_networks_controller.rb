class SocialNetworksController < ApplicationController
  def new
    @profile = Profile.find(params[:profile_id])
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

  private
  def social_network_params
    params.require(:social_network).permit(:name, :url_link)
  end

end
