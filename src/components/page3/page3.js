import React from "react";
import image1 from "../../assets/Rectangle 236.png";
import image2 from "../../assets/Rectangle 233.png";
import { Button } from "react-bootstrap";
import "./page3.css";
import Ellipse from "../../utils/ellipse";
import union from "../../assets/Union.png";

const Page3 = () => {
  return (
    <div className="page3">
      <div
        className="page3-div"
        style={{ position: "absolute", left: 150, top: "-50" }}
      >
        <img
          src={image1}
          alt="rectangle36"
          style={{ width: "430px", marginTop: "-60px" }}
        />
        <div>
          <h3 style={{ fontFamily: "Circular Std", fontWeight: "bold" }}>
            Develop Without Limits
          </h3>
          <p style={{ fontFamily: "Roboto", color: "#fff", margin: "20px 0" }}>
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </p>
          <Button
            style={{
              backgroundColor: "#70C217",
              borderRadius: "60px",
              padding: "10px",
            }}
          >
            Read the Documentation
          </Button>
        </div>
      </div>
      <div
        className="page3-div"
        style={{
          position: "absolute",
          bottom: -50,
          right: 150,
        }}
      >
        <div>
          <h3 style={{ fontFamily: "Circular Std", fontWeight: "bold" }}>
            Know our Global Community
          </h3>
          <p style={{ fontFamily: "Roboto", color: "#fff", margin: "20px 0" }}>
            WooCommerce is one of the fastest-growing eCommerce communities.
            We’re proud that the helpfulness of the community and a wealth of
            online resources are frequently cited as reasons our users love it.
            There are 80+ meetups worldwide!
          </p>
          <Button
            style={{
              backgroundColor: "#70C217",
              borderRadius: "60px",
              padding: "10px",
            }}
          >
            Read the Documentation
          </Button>
        </div>
        <img src={image2} alt="rectangle33" style={{ width: "430px" }} />
      </div>
      <img
        src={union}
        alt="union"
        style={{ position: "absolute", width: "400px", right: 0 }}
      />
      <ul className="ellipse" style={{ position: "absolute", top: 300 }}>
        <Ellipse n={50} color={"#70C217"} />
      </ul>
      <ul
        className="ellipse"
        style={{ position: "absolute", right: 0, bottom: 80 }}
      >
        <Ellipse n={25} color={"#70C217"} />
      </ul>

      <svg
        style={{ position: "absolute", top: 100, left: 120 }}
        width="401"
        height="401"
        viewBox="0 0 401 401"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200.5"
          cy="200.5"
          r="198"
          stroke="#FFBA49"
          strokeWidth="5"
        />
      </svg>
      <svg
        style={{ position: "absolute", top: 30, left: 80 }}
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32.5" cy="32.5" r="30" stroke="#FFBA49" strokeWidth="5" />
      </svg>
      <svg
        style={{ position: "absolute", top: 400, right: 60 }}
        width="401"
        height="401"
        viewBox="0 0 401 401"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200.5"
          cy="200.5"
          r="150"
          stroke="#FFBA49"
          strokeWidth="5"
        />
      </svg>
      <svg
        style={{ position: "absolute", top: 350, right: 340 }}
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32.5" cy="32.5" r="30" stroke="#FFBA49" strokeWidth="5" />
      </svg>
    </div>
  );
};

export default Page3;
