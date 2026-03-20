import React from "react";
import { Award, Globe } from "lucide-react";
import useReveal from "../utils/useReveal";
import "./Certifications.css";

const ICON_MAP = {
  award: Award,
  globe: Globe,
};

const Certifications = ({ certifications }) => {
  const titleRef = useReveal();
  const listRef = useReveal();

  if (!certifications?.length) return null;

  return (
    <section id="certifications">
      <div className="section-label">06 — Certifications</div>
      <h2 className="section-title reveal" ref={titleRef}>
        Credentials.
      </h2>
      <div className="certs__list reveal" ref={listRef}>
        {certifications.map((cert, i) => {
          const Icon = ICON_MAP[cert.icon] || Award;
          return (
            <div className="certs__item" key={cert._id || i}>
              <div className="certs__icon">
                <Icon size={20} />
              </div>
              <div>
                <div className="certs__name">{cert.title}</div>
                <div className="certs__source">{cert.issuer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
