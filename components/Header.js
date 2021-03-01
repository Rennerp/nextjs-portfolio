import React from "react";

export default function Header() {
  return (
    <header className="row">
      <div className="col-md-12">
        <div className="card bg-secondary card-body text-white">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src="profile.png"
                className="img-fluid"
                style={{ height: "50vh" }}
              />
            </div>
            <div className="col-md-8">
              <h1>Renner Jesus Garcia Poveda</h1>
              <h5>Managua, Nicaragua</h5>
              <h5>Telf: +505 7518 - 7141</h5>
              <h5>Email: rekefa@gmail.com</h5>
              <div className="py-4">
                <h3>FullStack Developer</h3>
                <p>
                  Software developer, through all my years of experience, I have
                  discovered many qualities about myself, besides my passion for
                  software development and new technologies, I consider myself
                  to be a person with a lot of values empathy, responsable,
                  honest, team player, with no fear of new challenges,
                  detail-oriented and very proactive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
