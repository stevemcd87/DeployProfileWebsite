module ProjectsHelper

  def tech_field(project)
    edit_project_tech = text_field(:project, :technologies, value: @project[:technologies].join(','))
    add_project_path = text_field(:project, :technologies)
    project.technologies ? edit_project_tech : add_project_path
  end
  
end
