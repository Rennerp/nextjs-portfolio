import Layout from "../components/Layout";
import { skills, experiences } from "../profile";
import Skill from "../components/Skill";
import Experience from "../components/Experience";

const Index = () => (
  <Layout>
    {/** Header card **/}

    <header className="row">
      <div className="col-md-12">
        <div className="card bg-secondary card-body text-white">
          <div className="row">
            <div className="col-md-4">
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

    {/** Second Section **/}

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

    {/** Projects section **/}
  </Layout>
);

export default Index;
