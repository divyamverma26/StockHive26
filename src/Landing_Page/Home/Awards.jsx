function Awards() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-lg-6 col-sm-12">
          <img
            src="images/largestBroker.svg"
            alt="largest broker"
            style={{ width: "80%" }}
          ></img>
        </div>
        <div className="col-lg-6 mt-3 col-sm-12">
          <h2>Largest stock broker in India</h2>
          <p className="mt-2">
            2+ million StockHive clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Policies</p>
                </li>
              </ul>
            </div>
            <img src="images/pressLogos.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
