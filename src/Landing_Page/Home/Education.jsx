import { Link } from "react-router-dom";
function Education() {
  return (
    <div className="container pt-5 mt-5 mb-5 pb-5">
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12">
          <img src="images/education.svg"></img>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="mb-5 fs-2">Free and open market education</h1>
          <p className="mb-4 fs-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Link to="/" style={{ textDecoration: "none" }} className="">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <p className="mb-4 mt-5 fs-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            TradingQ&A<i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;
