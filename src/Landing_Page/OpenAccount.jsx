import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5">
        <h1 className="mt-4 mb-2 fs-2">Open a StockHive Account</h1>
        <p className="fs-5 mt-4 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/StockHive26/signup">
          <button
            className="p-2 mt-3"
            style={{
              width: "20%",
              color: "white",
              backgroundColor: "#387ed1",
              margin: "0 auto",
              borderRadius: "5px",
              fontSize: "large",
              border: "0px",
            }}
          >
            Sign Up for free!!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
