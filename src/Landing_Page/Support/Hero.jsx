function Hero() {
  return (
    <section id="supportHero" className="pt-5">
      <div className="mt-5 pt-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row mb-5 pb-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-sm-12 p-5">
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <input
            placeholder="Ex: How do I activate F&O"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "2px solid white",
              width: "20rem",
              margin: "2rem 0",
            }}
          />
          <br></br>
          <a href="">Track account opening </a>&nbsp;&nbsp;
          <a href="">Track segment activation </a>&nbsp;&nbsp;
          <a href="">Intraday margins </a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-sm-12 p-5">
          <h3>Featured</h3>
          <ol type="number">
            <li>
              <a href="">Suspension of trading - IDFC Limited</a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in October 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
