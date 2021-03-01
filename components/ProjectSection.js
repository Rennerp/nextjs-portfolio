import React from "react";
import Project from "../components/Project";
import { projects } from "../profile";

export default function ProjectSection() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map(({ title, description, image }, i) => (
              <Project
                key={i}
                title={title}
                description={description}
                image={image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
