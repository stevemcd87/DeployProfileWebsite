class ProjectsController < ApplicationController
  def new
    @profile = Profile.find(params[:profile_id])
    @project =  @profile.projects.new
  end

  def create
    @profile = Profile.find(params[:profile_id])
    p '================'
    p params
    techs =  params[:project][:technologies].split(',').map { |tech| tech.chomp  }
    proj_params = project_params
    proj_params[:technologies] = techs
    p proj_params

    @project =  @profile.projects.new(proj_params)
    if @project.save
      redirect_to hello_world_path
    else
      render 'new'
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :technologies, :description ,:url_link)
  end

end
