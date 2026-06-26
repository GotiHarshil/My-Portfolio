import React from "react";
import useReveal from "../utils/useReveal";
import "./About.css";

const About = ({ profile }) => {
  const titleRef = useReveal();
  const contentRef = useReveal();
  if (!profile) return null;

  const parts = (profile.name || "HG").split(" ");
  const initials = parts.map((n) => n[0]).join("");

  return (
    <section className="about" id="about">
      <div className="section-label">01 — About</div>

      <div className="about__top reveal" ref={titleRef}>
        <div className="about__monogram">
          <div className="about__monogram-ring" />
          <div className="about__monogram-inner">{initials}</div>
        </div>
        <h2 className="about__heading">
          The person behind
          <br />
          <span className="about__heading-em">the code.</span>
        </h2>
      </div>

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
