import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
          <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              totam, ratione, voluptas eveniet soluta incidunt itaque optio
              beatae id temporibus, ex exercitationem sint ad earum in sed?
              Quam, cum sunt.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              totam, ratione, voluptas eveniet soluta incidunt itaque optio
              beatae id temporibus, ex exercitationem sint ad earum in sed?
              Quam, cum sunt.
            </p>
            <Link className="btn btn-dark" to="/store">
              Store
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
