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
      <div className="exp__timeline reveal" ref={timelineRef}>
        {experiences.map((exp, i) => (
          <div className="exp__item" key={exp._id || i}>
            <div className="exp__role">{exp.role}</div>
            <div className="exp__company">
              {exp.company} — {exp.location}
            </div>
            <div className="exp__date">
              {exp.startDate} – {exp.endDate}
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
