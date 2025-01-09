import { Link } from "react-router-dom";
function Footer() {
  return (
    <nav
      className="border-top"
      style={{
        backgroundColor: "rgb(250,250,250)",
        minHeight: "100vh",
        marginBottom: "0",
      }}
    >
      <div className="container mt-5">
        <div className="row">
          <div className="col p-3">
            <img src="images/tradelogo.png" style={{ width: "50%" }}></img>
            <p className="mt-3 pr-3 text-muted">
              &copy; 2010 - 2024, StockHive Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col foot">
            <h2 className="fs-5 mb-4">Company</h2>
            <Link to="">About </Link>
            <br></br>
            <Link to="">Products</Link>
            <br></br>
            <Link to="">Pricing</Link>
            <br></br>
            <Link to="">Referral programme</Link>
            <br></br>
            <Link to="">Careers </Link>
            <br></br>
            <Link to="">StockHive.tech </Link>
            <br></br>
            <Link to="">Press & media </Link>
            <br></br>
            <Link to="">StockHive Cares (CSR)</Link>
            <br></br>
          </div>
          <div className="col foot">
            <h2 className="fs-5 mb-4">Support</h2>
            <Link to="">Contact us </Link>
            <br></br>
            <Link to="">Support portal </Link>
            <br></br>
            <Link to="">Z-Connect blog </Link>
            <br></br>
            <Link to="">List of charges </Link>
            <br></br>
            <Link to="">Downloads & resources </Link>
            <br></br>
            <Link to="">Videos Market overview </Link>
            <br></br>
            <Link to="">How to file a complaint? </Link>
            <br></br>
            <Link to="">Status of your complaints</Link>
            <br></br>
          </div>
          <div className="col foot">
            <h2 className="fs-5 mb-4">Account</h2>
            <Link to="">Open an account </Link>
            <br></br>
            <Link to="">Fund transfer</Link>
            <br></br>
          </div>
        </div>
        <div
          className="row mt-5 text-muted p-3"
          style={{
            fontSize: "10px",
            lineHeight: "20px",
            fontWeight: "semi-bold",
            opacity: "80%",
          }}
        >
          <p>
            StockHive Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through StockHive Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Commodity Trading through StockHive Commodities Pvt.
            Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
            Registered Address: StockHive Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@StockHive.com, for
            DP related to dp@StockHive.com. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1- Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2- Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3- Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of StockHive and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
