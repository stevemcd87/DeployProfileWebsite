import React from "react";

const Projects = props => {
  let profile = props.profile,
    projects = profile.projects,
    signedIn = props.signedIn,
    deleteProject = projectId => {
      let confirmed = confirm("Are you sure?");
      if (confirmed) {
        fetch(`/profiles/${profile.id}/projects/${projectId}`, {
          method: "delete"
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .then(res => {
            window.location.href = "/about-me/";
            // return false
          })
          .catch(error => {
            console.error("error", error);
          });
      }
      return false;
    };
  console.log(props);
  return (
    <div id="projects" role="links">
      {signedIn && <a href={`/profiles/${profile.id}/projects/new`}>Add Project</a>}
      {projects.map((project, ind) => {
        return (
          <div className="project" key={ind}>
            {signedIn && (
              <div>
                <a
                  href={`/profiles/${profile.id}/projects/${project.id}/edit`}
                  target="_blank"
                >
                  Edit Project
                </a>
              </div>
            )}
            <h3>{project.name}</h3>
            <p>{project.technologies.join(" , ")}</p>
            <p>
              {project.description}
              <a href={project.url_link} target="_blank">
                Visit Here
              </a>
            </p>
            {signedIn && (
              <div>
                <a href="#" onClick={() => deleteProject(project.id)}>
                  Remove Project
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
