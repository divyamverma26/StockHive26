function Hero() {
  return (
    <div className="container pt-5 pb-5 border-bottom ">
      <div className="row text-center mt-5">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">List of all charges and taxes</h3>
      </div>
      <div className="row text-center mt-5 pt-5">
        <div className="col-lg-4 col-sm-12">
          <img src="images/pricingEquity.svg" style={{ width: "75%" }}></img>
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img src="images/intradayTrades.svg" style={{ width: "75%" }}></img>
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img src="images/pricingEquity.svg" style={{ width: "75%" }}></img>
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
