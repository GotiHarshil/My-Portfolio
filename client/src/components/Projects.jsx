import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";
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
          <div
            className={`projects__card ${i === 0 ? "projects__card--featured" : ""}`}
            key={proj._id || i}
          >
            <div className="projects__card-glow" />

            <div className="projects__card-top">
              <div className="projects__number">
                {i === 0 && <Star size={12} className="projects__star" />}
                Project {String(i + 1).padStart(2, "0")}
              </div>
              {proj.githubUrl && (
                <div className="projects__links">
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" title="View source">
                    <Github size={15} />
                  </a>
                </div>
              )}
            </div>

            <h3 className="projects__name">{proj.title}</h3>

            <ul className="projects__desc">
              {proj.description?.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            {proj.stack?.length > 0 && (
              <div className="projects__stack">
                {proj.stack.map((tech, k) => (
                  <span className="projects__tech" key={k}>{tech}</span>
                ))}
              </div>
            )}

            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="projects__live-btn"
              >
                <ExternalLink size={14} />
                View Live
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
