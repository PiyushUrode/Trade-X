import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import "../Style/Header.css";
import image1 from "../image/coin 22.png";
import image2 from "../image/banner_top_left.png";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with duration of 2 seconds
  }, []);

  return (
    <>
      <div className="headermain">
        <div
          className="header-left"
          data-aos="fade-right" // Apply AOS animation
        >
          <img src={image2} alt="" className="bannerimg" />
          <h1>
            Make Easy Your Buy Sell <span>& Trade Cryptocurrency</span>
          </h1>
          <p>
            Uncover the ultimate synergy of trading and investment success with
            our all-in-one platform – where seamless functionality meets informed
            decision-making. Dive into an effortless trading experience designed
            for your success.
          </p>
          <div>
            <button className="custom-btn btn-16">Read More</button>
          </div>
        </div>

        <div
          className="header-right"
          data-aos="fade-left" // Apply AOS animation
        >
          <img src={image1} alt="" />
          <div className="point"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
