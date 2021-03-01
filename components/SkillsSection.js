import React from "react";
import { skills, experiences } from "../profile";
import Skill from "./Skill";
import Experience from "./Experience";

export default function SkillsSection() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <Skill skill={skill} percentage={percentage} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            {experiences.map(({ company, role, from, to, description }, i) => (
              <Experience
                key={i}
                company={company}
                role={role}
                from={from}
                to={to}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
