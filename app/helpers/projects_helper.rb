module ProjectsHelper
  def tech_field(project)
    if project.technologies
      text_field(:project, :technologies, value: @project[:technologies].join(','))
    else
      text_field(:project, :technologies)
    end
  end
end
