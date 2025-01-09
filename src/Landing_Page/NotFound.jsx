import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5 mt-5">
        <h1 className="mt-4 mb-2 fs-2">404</h1>
        <p className="fs-5 mt-4 text-muted">
          We couldn’t find the page you were looking for. Visit
          <Link to="/" style={{ textDecoration: "none" }}>
            &nbsp;home page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
