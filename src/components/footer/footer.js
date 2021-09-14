import React from "react";
import {
  FaLock,
  FaCheckCircle,
  FaLifeRing,
  FaTwitter,
  FaInstagram,
  FaWifi,
  FaFacebook,
} from "react-icons/fa";
import logo from "../../assets/footer-logo.png";
import auto from "../../assets/auto.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <ul
            style={{
              width: "90%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-evenly",
              listStyle: "none",
              padding: "20px",
              color: "#fff",
            }}
          >
            <li style={{ width: "30%", fontSize: "1.2em" }}>
              <FaCheckCircle size={30} style={{ margin: "15px" }} />
              30 day money back guarantee
            </li>
            <li style={{ width: "30%", fontSize: "1.2em" }}>
              <FaLifeRing size={30} style={{ margin: "15px" }} />
              Support teams across the world
            </li>
            <li style={{ width: "30%", fontSize: "1.2em" }}>
              <FaLock size={30} style={{ margin: "15px" }} />
              Safe & Secure online payment
            </li>
          </ul>
          <img src={logo} alt="logo" style={{ margin: "30px" }} />
        </div>
        <hr
          style={{
            color: "#9A7DFF",
            height: "3px",
            width: "80%",
            margin: "auto",
          }}
        />
        <div style={{ width: "80%", margin: " auto", padding: "50px 0" }}>
          <ul
            style={{
              width: "100%",
              display: "flex",
              listStyle: "none",
              justifyContent: "space-evenly",
              color: "#fff",
            }}
            className="footer-links"
          >
            <li>
              <b>WHO WE ARE</b>
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>Work With Us</li>
              </ul>
            </li>
            <li>
              <b>WOOCOMMERCE</b>
              <ul>
                <li>Features</li>
                <li>Payments</li>
                <li>Marketing</li>
                <li>Shipping</li>
                <li>Extension Store</li>
                <li>eCommerce blog</li>
                <li>Development blog</li>
                <li>Ideas board</li>
                <li>Mobile App</li>
                <li>Community</li>
                <li>Style Guide</li>
                <li>Email Newsletter</li>
              </ul>
            </li>
            <li>
              <b>OTHER PRODUCTS</b>
              <ul>
                <li> Storefront</li>
                <li>WooSlider</li>
                <li>Sensei</li>
                <li>Sensei Extensions</li>
              </ul>
            </li>
            <li>
              <b>SUPPORT</b>
              <ul>
                <li>Documentation</li>
                <li>Customizations</li>
                <li>Support Policy</li>
                <li>Contact</li>
                <li>COVID-19 Resources</li>
                <li>Privacy Notice for</li>
                <li>California Users</li>
              </ul>
            </li>
            <li>
              <b> WE RECOMMEND</b>
              <ul>
                <li>WooExperts</li>
                <li>Hosting Solutions</li>
                <li>Pre-sales FAQ</li>
                <li>Success Stories</li>
                <li>Design Feedback Group</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "60px",
          backgroundColor: "#fff",
        }}
      >
        <ul
          style={{
            width: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          <li>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                listStyle: "none",
              }}
              className="icons"
            >
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaWifi />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </li>
          <li
            style={{
              fontFamily: "Roboto",
              fontWeight: "bolder",
              display: "flex",
              alignItems: "center",
              color: "#272D4E",
            }}
          >
            COPYRIGHT WOOCOMMERCE 2021 - TERMS & CONDITIONS PRIVACY POLICY
          </li>
          <li>
            <img src={auto} alt="automatic" style={{ marginTop: "-5px" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
