import React from "react";
import { Zap, MapPin } from "lucide-react";
import "./Hero.css";

const Hero = ({ profile }) => {
  if (!profile) return null;
  const parts = (profile.name || "Harshil Goti").split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");
  const initials = parts.map((n) => n[0]).join("");

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />

      <div className="hero__inner">
        {/* ─── Left: copy ─── */}
        <div className="hero__left">
          <div className="hero__available">
            <span className="hero__pulse" />
            Available for opportunities
          </div>

          <h1 className="hero__name">
            <span className="hero__name-first">{firstName}</span>
            <span className="hero__name-last">{lastName}</span>
          </h1>

          <div className="hero__role-tag">
            <span className="hero__bracket">&lt;</span>
            {profile.title}
            <span className="hero__bracket"> /&gt;</span>
          </div>

          <p className="hero__desc">{profile.tagline}</p>

          <div className="hero__ctas">
            <a href="#contact" className="btn btn-primary">Get in Touch ↗</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>

          {profile.stats?.length > 0 && (
            <div className="hero__stats">
              {profile.stats.map((s, i) => (
                <div className="hero__stat" key={i}>
                  <span className="hero__stat-num">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ─── Right: glass card ─── */}
        <div className="hero__right">
          <div className="hero__card">
            <div className="hero__card-shine" />
            <div className="hero__avatar">{initials}</div>
            <div className="hero__card-name">{profile.name}</div>
            <div className="hero__card-role">{profile.title}</div>
            <div className="hero__card-sep" />
            {profile.stats?.length > 0 && (
              <div className="hero__card-stats">
                {profile.stats.map((s, i) => (
                  <div className="hero__card-stat" key={i}>
                    <span className="hero__card-stat-n">{s.value}</span>
                    <span className="hero__card-stat-l">{s.label}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="hero__card-sep" />
            <div className="hero__card-metas">
              {profile.details?.slice(0, 3).map((d, i) => (
                <div className="hero__card-meta" key={i}>
                  <span className="hero__card-meta-k">{d.label}</span>
                  <span className="hero__card-meta-v">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__pill hero__pill--1">
            <Zap size={12} /> MERN Stack
          </div>
          <div className="hero__pill hero__pill--2">
            <MapPin size={12} /> New York City
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
