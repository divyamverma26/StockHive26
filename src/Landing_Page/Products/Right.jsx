function Right({ imageurl, name, des, learn }) {
  return (
    <div className="container border-bottom pb-3">
      <div className="row">
        <div className="col-lg-4 col-sm-12 mt-5">
          <h1
            className="mb-4"
            style={{ marginTop: name == "Console" ? "100px" : "10px" }}
          >
            {name}
          </h1>
          <p>{des}</p>
          <a href={learn} style={{ textDecoration: "none" }}>
            Learn more →
          </a>
        </div>
        <div className="col-lg-8 col-sm-12">
          <img
            src={imageurl}
            style={{ width: "80%", marginLeft: "150px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Right;
