module ProjectsHelper

  def tech_field(project)
    technologies_value = project.technologies ? @project[:technologies].join(',') : ""
    text_field(:project, :technologies, value: technologies_value)
  end

end
