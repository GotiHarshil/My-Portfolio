import React from "react";
import useReveal from "../utils/useReveal";
import "./About.css";

const About = ({ profile }) => {
  const titleRef = useReveal();
  const contentRef = useReveal();

  if (!profile) return null;

  return (
    <section className="about" id="about">
      <div className="section-label">01 — About</div>
      <h2 className="section-title reveal" ref={titleRef}>
        The person behind
        <br />
        the code.
      </h2>
      <div className="about__grid reveal" ref={contentRef}>
        <div className="about__text">
          {profile.bio?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="about__details">
          {profile.details?.map((d, i) => (
            <div className="about__detail-card" key={i}>
              <div className="about__detail-label">{d.label}</div>
              <div className="about__detail-value">{d.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
