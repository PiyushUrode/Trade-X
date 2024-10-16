import React from 'react'
import "../Style/Footer.css"
import icon1 from "../image/facebook.png"
import icon2 from "../image/youtube.png"
import icon3 from "../image/whatsapp.png"
import icon4 from "../image/Telegram.png"


const Footer = () => {
  const products = [
    { href: "#product", title: "Exchange" },
    { href: "#product", title: "Market" },
    { href: "#product", title: "Staking" },
  ];

  const moreLinks = [
    { href: "#aboutus", title: "About Us" },
    { href: "#howitwork", title: "How it works" },
    { href: "#whychoose", title: "News" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__section">
            {/* <img className="footer__logo" src={icon1} alt="Logo" /> */}
            <h1>Trade-X</h1>
            {/* <p className="footer__description">
              Dive into the world of Metaverse, Artificial Intelligence,
              Blockchain, Robotics, and Web3.0.
            </p> */}
            <div className="footer__social">
              <a
                              href="https://www.facebook.com/profile.php?id=61565532436333&mibextid=ZbWKwL"
                // href="https://t.me/bitnetnews"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon1} alt="Social facebook" />
              </a>

              <a
                // href="https://www.facebook.com/profile.php?id=61565532436333&mibextid=ZbWKwL"
                                href="https://whatsapp.com/channel/0029VaXM0GfCxoAnBirfFH3R"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon2} alt=" social facebook" />
              </a>
              <a
                href="https://www.instagram.com/bitnet.official?igsh=MXhiOWVjcm41aGpyZQ=="
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon3} alt="Social Instagram " />
              </a>


              <a
                href="https://youtube.com/@bitnetofficial?si=Psg_3dLlqJ_45Zs8"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon4} alt="youutbe" />
              </a>


            </div>
          </div>

          {/* Product Section */}
          <div className="footer__section">
            <h3 className="footer__heading">About Us
            </h3>
            <ul className="footer__list">
              {products.map((product) => (
                <li key={product.href}>
                  <a href={product.href} className="footer__link">
                    {product.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links Section */}
          <div className="footer__section">
            <h3 className="footer__heading">Service</h3>
            <ul className="footer__list">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms and Privacy Section */}
          <div className="footer__section">
            <h3 className="footer__heading">Support</h3>
            <ul className="footer__list">
              <li >
                <a href="#whychoose" id="" className="footer__link">
                  {" "}
Fees
                </a>
              </li>

              <li>
                <a href="#" className="footer__link">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copyright"> © 2024 Trade.X. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Footer