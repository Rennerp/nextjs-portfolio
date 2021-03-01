const Project = ({ title, description, image }) => (
  <div className="col-md-4 py-2">
    <div className="card h-100">
      <div className="overflow">
        <img src={`/${image}`} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default Project;
