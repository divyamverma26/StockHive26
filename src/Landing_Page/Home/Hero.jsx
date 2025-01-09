import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5">
        <img
          src="images/homeHero.png"
          className="mb-5 mt-5 pt-5"
          style={{ width: "60%", margin: "0 auto" }}
        ></img>
        <h1 className="mt-4 mb-2">Invest in everything</h1>
        <p className="fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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
            Start Trading!!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
