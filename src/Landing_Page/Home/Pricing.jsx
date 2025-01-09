import { Link } from "react-router-dom";
function Pricing() {
  return (
    <div className="container mt-5 mb-5 pt-5 pb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            See Pricing <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="col-lg-6 text-center col-sm-12">
          <div className="row border">
            <div className="col border p-2">
              <h1 className="fs-2 mb-2 mt-4">₹0</h1>
              <p>
                Free equity delivery and <br></br>direct mutual funds
              </p>
            </div>
            <div className="col border p-2">
              <h1 className="fs-2 mb-2 mt-4">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
