import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container p-2">
        <div style={{ marginRight: "14rem" }}>
          <Link class="navbar-brand" to="/StockHive26/">
            <img src="images/tradelogo.png" style={{ width: "27%" }}></img>
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/StockHive26/signup"
                >
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/StockHive26/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/StockHive26/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/StockHive26/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/StockHive26/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
