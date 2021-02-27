const Experience = ({ company, role, from, to, description }) => (
  <ul>
    <li>
      <h3>{company}</h3>
      <h5>{`${from} - ${to != undefined ? to : "Current"} | ${role}`}</h5>
      <p>{description}</p>
    </li>
  </ul>
);

export default Experience;
