import React from "react";
import { Button } from "react-bootstrap";
import image15 from "../../assets/image.png";
import bitmap from "../../assets/Bitmap.png";
import Ellipse from "../../utils/ellipse";
import "./header-sec.css";
import stripe from "../../assets/Stripe.png";
import paypal from "../../assets/PayPal.png";
import vector from "../../assets/Vector.png";

const HeaderSec = () => {
  return (
    <div className="section">
      <div
        style={{
          padding: "100px 100px",
          textAlign: "left",
          position: "absolute",
          zIndex: 1,
          top: 100,
        }}
        className="section-div"
      >
        <h1 style={{ color: "#272D4E" }}>
          Building exactly the eCommerce website you want.
        </h1>
        <p style={{ color: "#94A2B3", fontWeight: 400 }}>
          WooCommerce is a customizable, open-source eCommerce platform built on
          WordPress. Get started quickly and make your way.
        </p>
        <Button style={{ backgroundColor: "#7854F7", borderRadius: "60px" }}>
          Start a New Store
        </Button>
      </div>
      <div
        className="section-div"
        style={{
          position: "absolute",
          top: 100,
          right: 0,
          zIndex: 1,
          padding: "20px 0",
        }}
      >
        <img
          src={image15}
          alt=""
          style={{
            width: "200px",
            borderRadius: "10px",
            zIndex: 10,
            position: "absolute",
            left: -60,
            top: 100,
          }}
        />
        <div className="sale">
          <img src={bitmap} alt="bitmap" style={{width:'50%'}}/>
          <div>
            <p
              style={{
                width: "100%",
                fontWeight: "normal",
                color: "#868686",
              }}
            >
              <span
                style={{
                  width: "100%",
                  fontWeight: 700,
                  color: "#272D4E",
                  marginRight: "20px",
                }}
              >
                SHOES
              </span>
              Adidas Originals
            </p>
            <h3 style={{ color: "#222222" }}>Adidas Originals OG Sneakers</h3>
            <ul className="shoes-size">
              <li>7</li>
              <li>7.5</li>
              <li>8</li>
              <li>8.5</li>
              <li>9</li>
            </ul>
            <div
              style={{
                color: "#868686",
                display: "flex",
                position: "relative",
                width:'250px',
                justifyContent:'space-around',
                margin:'auto'
              }}
            >
              <span
                style={{ color: "#7854F7", fontWeight: 500, fontSize: "24px" }}
              >
                $350
              </span>

              <span
                style={{
                  position: "absolute",
                  top: 50,
                  left:23,
                  textDecorationLine: "line-through",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                $400
              </span>

              <ul className="shoes-num">
                <li
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#222222",
                    cursor: "pointer",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                >
                  -
                </li>
                <li>1</li>
                <li
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#222222",
                    cursor: "pointer",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  +
                </li>
              </ul>
            </div>
            <Button
              style={{
                backgroundColor: "#7854F7",
                width: "150px",
              }}
            >
              Add To Card
            </Button>
          </div>
        </div>
        <div className="payment">
          <ul>
            <li>
              <img src={stripe} alt="stripe" />
            </li>
            <li>Stripe gateway</li>
            <li>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <img src={paypal} alt="paypal" />
            </li>
            <li>Paypal payments</li>
            <li>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <img src={vector} alt="stripe" />
            </li>
            <li>Bank Transfers</li>
            <li>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
        </div>

        <ul
          className="ellipse"
          style={{ position: "absolute", top: 400, right: 0, zIndex: -1 }}
        >
          <Ellipse n={25} color={"#7854F7"} />
        </ul>
        <ul
          className="ellipse"
          style={{ position: "absolute", top: 0, right: 50, zIndex: -1 }}
        >
          <Ellipse n={25} color={"#29AAF3"} />
        </ul>
        <ul
          className="ellipse"
          style={{ position: "absolute", top: 200, left: -120, zIndex: -1 }}
        >
          <Ellipse n={25} color={"#29AAF3"} />
        </ul>
      </div>
    </div>
  );
};

export default HeaderSec;
