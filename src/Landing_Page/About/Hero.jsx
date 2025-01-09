import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container pt-5 pb-5 about">
      <div className="row mt-5 mb-5 p-5 text-center border-bottom">
        <h1 className="fs-2 p-2">
          We pioneered the discount broking model in India.<br></br>
        </h1>
        <h1 className="fs-2 pb-5">
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row mt-5 mb-5 p-5 border-bottom">
        <div className="col-lg-6 col-sm-12 pb-5 about">
          <p className="p-2">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            StockHive, displaying a perfect home for all your market
            transactions.
          </p>
          <p className="p-2">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="p-2">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 about">
          <p className="p-2">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="p-2">
            <a href="" className="text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="p-2">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <Link to="" className="text-decoration-none">
              blog
            </Link>{" "}
            or see what the media is
            <Link to="" className="text-decoration-none">
              &nbsp;saying about us
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
