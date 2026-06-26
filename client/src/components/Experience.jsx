import React from "react";
import useReveal from "../utils/useReveal";
import "./Experience.css";

const Experience = ({ experiences }) => {
  const titleRef = useReveal();
  const timelineRef = useReveal();
  if (!experiences?.length) return null;

  return (
    <section id="experience">
      <div className="section-label">02 — Experience</div>
      <h2 className="section-title reveal" ref={titleRef}>
        Where I've
        <br />
        made impact.
      </h2>
      <div className="exp__list reveal" ref={timelineRef}>
        {experiences.map((exp, i) => (
          <div className="exp__card" key={exp._id || i}>
            <div className="exp__card-accent" />
            <div className="exp__header">
              <div className="exp__badge">
                {exp.company?.[0]?.toUpperCase()}
              </div>
              <div className="exp__header-text">
                <div className="exp__role">{exp.role}</div>
                <div className="exp__company">
                  {exp.company} — {exp.location}
                </div>
              </div>
              <div className="exp__date-pill">
                {exp.startDate} – {exp.endDate}
              </div>
            </div>
            <ul className="exp__points">
              {exp.points?.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
