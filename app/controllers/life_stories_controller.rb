class LifeStoriesController < ApplicationController
  def new
    p '=================================='
    p params
    @profile = Profile.find(params[:profile_id])
    @life_story =  @profile.build_life_story
  end

  def create
    @profile = Profile.find(params[:profile_id])
    @life_story = @profile.build_life_story(life_story_params)
    if @life_story.save
      redirect_to hello_world_path
    else
      render 'new'
    end
  end

  private

  def life_story_params
    params.require(:life_story).permit(:past, :present, :future)
  end
end
