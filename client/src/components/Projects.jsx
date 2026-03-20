import React from "react";
import { ExternalLink, Github } from "lucide-react";
import useReveal from "../utils/useReveal";
import "./Projects.css";

const Projects = ({ projects }) => {
  const titleRef = useReveal();
  const gridRef = useReveal();

  if (!projects?.length) return null;

  return (
    <section className="projects" id="projects">
      <div className="section-label">03 — Projects</div>
      <h2 className="section-title reveal" ref={titleRef}>
        Things I've
        <br />
        built.
      </h2>
      <div className="projects__grid reveal" ref={gridRef}>
        {projects.map((proj, i) => (
          <div className="projects__card" key={proj._id || i}>
            <div className="projects__number">
              PROJECT {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="projects__name">{proj.title}</h3>

            {proj.stack?.length > 0 && (
              <div className="projects__stack">
                {proj.stack.join(" · ")}
              </div>
            )}

            <ul className="projects__desc">
              {proj.description?.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            {(proj.liveUrl || proj.githubUrl) && (
              <div className="projects__links">
                {proj.liveUrl && (
                  <a href={proj.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live
                  </a>
                )}
                {proj.githubUrl && (
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
