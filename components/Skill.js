const Skill = ({ skill, percentage }) => (
  <div className="py-2">
    <h5>{skill}</h5>
    <div className="progress">
      <div
        className="progress-bar"
        rule="progressbar"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default Skill;
