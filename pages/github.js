import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, status_code }) => {
  if (status_code) {
    return <Error />;
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <card className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <p className="py-2">{user.bio}</p>
            <a
              className="btn btn-outline-secondary my-1"
              href={user.html_url}
              target="_blank"
            >
              Go to Github
            </a>
          </card>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const resp = await fetch("https://api.github.com/users/Rennerp");
  const data = await resp.json();

  const statusCode = resp.status > 200 ? resp.status : false;

  return {
    props: {
      user: data,
      status_code: statusCode,
    },
  };
}

export default Github;
