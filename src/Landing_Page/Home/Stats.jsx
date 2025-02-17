import { Link } from "react-router-dom";
function Stats() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 p-3">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="pb-3 text-muted">
            That's why 1.5+ crore customers trust StockHive with ₹4.5+ lakh
            crores of equity investments and contribute to 15% of daily retail
            exchange volumes in India.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="pb-3 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The StockHive universe</h2>
          <p className="pb-3 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="pb-3 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 p-3">
          <img src="images/ecosystem.png" style={{ width: "100%" }}></img>
          <div className="text-center">
            <Link to="/" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our Products <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              Try Kite <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
