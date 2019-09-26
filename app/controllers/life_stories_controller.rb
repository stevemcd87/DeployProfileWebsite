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
      redirect_to '/about-me/present'
    else
      render 'new'
    end
  end

  def update
    @life_story = LifeStory.find(params[:id])
    if @life_story.update(life_story_params)
      redirect_to '/about-me/present'
    else
      render 'edit'
    end
  end

  def destroy
    @life_story = LifeStory.find(params[:id])

    render json: {profile: nil} if @life_story.destroy
  end

  private

  def life_story_params
    params.require(:life_story).permit(:past, :presently, :future)
  end
end
