import React from "react";
import image1 from "../../assets/Rectangle 223.png";
import image2 from "../../assets/apple.png";
import image3 from "../../assets/image 16.png";
import image4 from "../../assets/Rectangle 224.png";
import image5 from "../../assets/image 17.png";
import image6 from "../../assets/image 19.png";
import image7 from "../../assets/image 18.png";
import image8 from "../../assets/image 20.png";
import image9 from "../../assets/image 22.png";
import image10 from "../../assets/Rectangle 225.png";
import image11 from "../../assets/Rectangle 226.png";
import image12 from "../../assets/Rectangle 227.png";
import image13 from "../../assets/Rectangle 228.png";

import "./page2.css";

const Page2 = () => {
  const link = window.location.href;
  return (
    <div className="page2">
      <ul>
        <li>
          <img src={image1} alt="rectangle1" />
          <h3
            style={{ color: "#272D4E", fontWeight: "bold", margin: "0 40px" }}
          >
            All You Need to Start
          </h3>
          <p style={{ color: " #94A2B3", margin: "10px 40px" }}>
            Add WooCommerce plugin to any WordPress site and set up a new store
            in minutes.
          </p>
          <a style={{ margin: "0 40px" }} href={link}>
            Ecommerce for Wordpress ›
          </a>
        </li>
        <img
          style={{ position: "absolute", top: 20, left: 0 }}
          src={image2}
          alt="apple"
        />
        <img
          style={{ position: "absolute", top: 60, left: -30, width: "200px" }}
          src={image3}
          alt="apple"
        />
      </ul>
      <ul style={{ paddingTop: "50px" }}>
        <li>
          <img src={image4} alt="rectangle2" />
          <h3
            style={{ color: "#272D4E", fontWeight: "bold", margin: "0 40px" }}
          >
            Customize and Extend
          </h3>
          <p style={{ color: " #94A2B3", margin: "10px 40px" }}>
            From subscriptions to gym classes to luxury cars, WooCommerce is
            fully customizable.
          </p>
          <a style={{ margin: "0 40px" }} href={link}>
            Browse Extensions ›
          </a>
        </li>
        <img
          style={{
            position: "absolute",
            display: "inline-block",
            top: 0,
            left: 50,
          }}
          src={image5}
          alt="square"
        />
        <img
          style={{ position: "absolute", top: 110, left: 20, width: "200px" }}
          src={image6}
          alt="facebook"
        />
        <img
          style={{ position: "absolute", top: 55, right: 15, width: "200px" }}
          src={image7}
          alt="mailchimp"
        />
        <img
          style={{ position: "absolute", top: 210, left: 80, width: "200px" }}
          src={image8}
          alt="google-ads"
        />
        <img
          style={{ position: "absolute", top: 135, right: 40, width: "200px" }}
          src={image9}
          alt="jetpack"
        />
      </ul>
      <ul style={{ paddingTop: "80px" }}>
        <li>
          <img src={image10} alt="rectangle5" />
          <h3
            style={{ color: "#272D4E", fontWeight: "bold", margin: "0 40px" }}
          >
            Active Community
          </h3>
          <p style={{ color: " #94A2B3", margin: "10px 40px" }}>
            WooCommerce is one of the fastest-growing eCommerce communities.
          </p>
          <a style={{ margin: "0 40px" }} href={link}>
            Check our Forums ›
          </a>
        </li>
        <img
          style={{ position: "absolute", top: 30, left: 45, width: "180px" }}
          src={image12}
          alt="rectangle22"
        />
        <img
          style={{ position: "absolute", top: 180, right: -40, width: "200px" }}
          src={image11}
          alt="rectangle21"
        />
        <img
          style={{ position: "absolute", top: -20, right: 30, width: "170px" }}
          src={image13}
          alt="rectangle28"
        />
      </ul>
    </div>
  );
};

export default Page2;
