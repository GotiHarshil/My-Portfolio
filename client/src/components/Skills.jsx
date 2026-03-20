import React from "react";
import { Code, Layers, Settings, Zap } from "lucide-react";
import useReveal from "../utils/useReveal";
import "./Skills.css";

const ICON_MAP = {
  code: Code,
  layers: Layers,
  settings: Settings,
  zap: Zap,
};

const Skills = ({ skills }) => {
  const titleRef = useReveal();
  const gridRef = useReveal();

  if (!skills?.length) return null;

  return (
    <section id="skills">
      <div className="section-label">04 — Skills</div>
      <h2 className="section-title reveal" ref={titleRef}>
        My toolkit.
      </h2>
      <div className="skills__grid reveal" ref={gridRef}>
        {skills.map((group, i) => {
          const Icon = ICON_MAP[group.icon] || Code;
          return (
            <div className="skills__group" key={group._id || i}>
              <div className="skills__group-title">
                <Icon size={16} /> {group.category}
              </div>
              <div className="skills__tags">
                {group.items?.map((item, j) => (
                  <span className="skills__tag" key={j}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
