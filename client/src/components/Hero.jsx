import React from "react";
import "./Hero.css";

const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <section className="hero" id="hero">
      <div className="hero__grid" />
      <div className="hero__glow" />
      <div className="hero__glow2" />

      <div className="hero__tag">{profile.title}</div>

      <h1 className="hero__name">
        {profile.name.split(" ")[0]} <em>{profile.name.split(" ")[1]}</em>
      </h1>

      <p className="hero__desc">{profile.tagline}</p>

      <div className="hero__ctas">
        <a href="#contact" className="btn btn-primary">
          Get in Touch ↗
        </a>
        <a href="#projects" className="btn btn-outline">
          View Projects
        </a>
      </div>

      {profile.stats?.length > 0 && (
        <div className="hero__stats">
          {profile.stats.map((s, i) => (
            <div key={i}>
              <div className="hero__stat-num">{s.value}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
