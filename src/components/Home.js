import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/jupiter20/GW-FInal/FinaleDesktop-Hero_3000x1200_Live-now_1x_NP._CB419052847_.jpg"
        />

        <div className="home__row">
          <Product
            id="123654"
            title="Samsung Galaxy M21 (Midnight Blue, 128 GB)  (6 GB RAM)"
            price={17150.0}
            image="https://rukminim1.flixcart.com/image/352/352/kah413k0/mobile/z/m/g/samsung-galaxy-m21-b07hgjj55il-original-imafsfewggf3dqwc.jpeg?q=70"
            rating={4}
          />
          <Product
            id="565421"
            title="Apple iPhone XR ((PRODUCT)RED, 64 GB)"
            price={37999.0}
            image="https://rukminim1.flixcart.com/image/352/352/jnj7iq80/mobile/3/f/a/apple-iphone-xr-mry62hn-a-original-imafa6zkhyceh8dg.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home__row">
        <Product
            id="654216"
            title="Amazon Echo (2nd Gen), Certified Refurbished, Black – Smart speaker with Alexa – Like new"
            price={3899.26}
            image="https://images-na.ssl-images-amazon.com/images/I/61QoZCzMx3L._SL1000_.jpg"
            rating={5}
          />
          <Product
            id="984651"
            title="Apple Watch SE GPS 44 mm Space Grey Aluminium Case with Black Sport Band  (Black Strap, Regular) "
            price={4000.0}
            image="https://rukminim1.flixcart.com/image/352/352/jn4x47k0/smartwatch/n/q/h/mu662hn-a-apple-original-imaf9vcgpbvgjdd3.jpeg?q=70"
            rating={4}
          />
          <Product
            id="651324"
            title="Hero Lot of 2 Original Hero 1515 Safari Al-Star Fine Nib & Converter new Fountain Pen "
            price={499.58}
            image="https://rukminim1.flixcart.com/image/352/352/pen/7/f/7/hero-329-green-original-imaenpfzjebaqgqm.jpeg?q=70"
            rating={3}
          />
        </div>
        <div className="home__row">
        <Product
            id="651321"
            title="Samsung 125cm (50 inch) Ultra HD (4K) LED Smart TV "
            price={46999.0}
            image="https://rukminim1.flixcart.com/image/352/352/ka5oia80/television/5/d/e/samsung-ua50tue60akxxl-original-imafrs6zp3afqgjf.jpeg?q=70"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
