function Universe() {
  return (
    <div className="container text-center mt-5 pt-5">
      <h1>The Zerodha Universe</h1>
      <p className="fs-5 mt-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-3 p-5">
        <div className="col-lg-4 col-sm-12 p-3">
          <img src="images/smallcaseLogo.png"></img>
          <p style={{ fontSize: "12px", fontWeight: "bold", padding: "2rem" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
          <img src="images/smallcaseLogo.png"></img>
          <p style={{ fontSize: "12px", fontWeight: "bold", padding: "2rem" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 p-3">
          <img src="images/smallcaseLogo.png"></img>
          <p style={{ fontSize: "12px", fontWeight: "bold", padding: "2rem" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img src="images/smallcaseLogo.png"></img>
          <p style={{ fontSize: "12px", fontWeight: "bold", padding: "2rem" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 p-3">
          <img src="images/smallcaseLogo.png"></img>
          <p style={{ fontSize: "12px", fontWeight: "bold", padding: "2rem" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img src="images/smallcaseLogo.png"></img>
          <p style={{ fontSize: "12px", fontWeight: "bold", padding: "2rem" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
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
      </div>
    </div>
  );
}

export default Universe;
