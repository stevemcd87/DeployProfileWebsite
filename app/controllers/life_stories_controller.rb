class LifeStoriesController < ApplicationController
  def new
    @profile = Profile.find(params[:profile_id])
    @life_story =  @profile.build_life_story
  end

  def edit
    @profile = Profile.find(params[:profile_id])
    @life_story =  @profile.life_story
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

  def update
    @life_story = LifeStory.find(params[:id])
    if @life_story.update(life_story_params)
      redirect_to hello_world_path
    else
      render 'edit'
    end
  end

  private

  def life_story_params
    params.require(:life_story).permit(:past, :present, :future)
  end
end
