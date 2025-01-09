import Hero from "./Hero";
import Left from "./Left";
import Right from "./Right";
import Universe from "./Universe";
function Product() {
  return (
    <>
      <Hero />
      <Left
        imageurl="images/kite.png"
        name="Kite"
        des="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryapp="jsjj"
        learn="jskk"
        playstore=""
        appstore=""
      />
      <Right
        imageurl="images/console.png"
        name="Console"
        des="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learn=""
      />
      <Left
        imageurl="images/coin.png"
        name="Coin"
        des="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryapp=""
        learn=""
        playstore=""
        appstore=""
      />
      <Right
        imageurl="images/kiteconnect.png"
        name="Kite Connect API"
        des="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learn=""
      />
      <Left
        imageurl="images/varsity.png"
        name="Varsity mobile"
        des="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        playstore=""
        appstore=""
        tryapp=""
        learn=""
      />
      <p className="fs-4 text-center text-muted">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default Product;
