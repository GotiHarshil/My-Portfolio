import React from "react";
import useReveal from "../utils/useReveal";
import "./Education.css";

const Education = ({ education }) => {
  const titleRef = useReveal();
  const gridRef = useReveal();

  if (!education?.length) return null;

  return (
    <section className="education" id="education">
      <div className="section-label">05 — Education</div>
      <h2 className="section-title reveal" ref={titleRef}>
        Academic
        <br />
        background.
      </h2>
      <div className="edu__grid reveal" ref={gridRef}>
        {education.map((edu, i) => (
          <div className="edu__card" key={edu._id || i}>
            <div className="edu__degree">{edu.degree}</div>
            <div className="edu__school">
              {edu.school} — {edu.location}
            </div>
            <div className="edu__meta">
              <span>{edu.field}</span>
              <span>{edu.graduationDate}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
