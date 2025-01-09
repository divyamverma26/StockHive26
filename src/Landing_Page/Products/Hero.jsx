import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container pt-5 text-center mb-5 pb-5 border-bottom">
      <div className="mt-5">
        <h1 className="mb-3">StockHive Technology</h1>
        <h3 className="mb-3 fs-5 opacity-75">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p>
          Check out our
          <Link to="" className="text-decoration-none">
            &nbsp;investment offerings →
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
