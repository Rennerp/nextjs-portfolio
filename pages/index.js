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
              <img src="profile.png" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Renner Poveda</h1>
              <h3>FullStack Developer</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/hireme">Hire Me</a>
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
  </Layout>
);

export default Index;
