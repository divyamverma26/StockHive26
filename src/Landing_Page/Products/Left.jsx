function Left({ imageurl, name, des, tryapp, learn, playstore, appstore }) {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5 border-bottom">
      <div className="row">
        <div className="col-lg-8 col-sm-12 p-3">
          <img src={imageurl} style={{ width: "80%" }}></img>
        </div>
        <div className="col-lg-4 col-sm-12 p-3 mt-5">
          <h1 className="mt-2 mb-4">{name}</h1>
          <p>{des}</p>
          <a
            href={tryapp}
            style={{
              textDecoration: "none",
              display: learn === "" ? "none" : "",
            }}
          >
            Try Demo →
          </a>
          <a
            href={learn}
            style={{
              textDecoration: "none",
              marginLeft: "120px",
              display: learn === "" ? "none" : "",
            }}
          >
            Learn more →
          </a>
          <br></br>
          <div className="mt-3">
            <a href={playstore}>
              <img src="images/googlePlayBadge.svg"></img>
            </a>
            <a
              href={appstore}
              style={{ marginLeft: "50px", marginTop: "50px" }}
            >
              <img src="images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
