import React from "react";
import image from "../../assets/team.png";
import { Button } from "react-bootstrap";
import Ellipse from "../../utils/ellipse";
import "./page5.css";

const Page5 = () => {
  return (
    <div className="page5">
      <div className="page5-div1">
        <ul
          className="ellipse"
          style={{ position: "absolute", bottom: 10, left: 20, zIndex: 1 }}
        >
          <Ellipse n={5} color={"#70C217"} />
        </ul>
        <ul
          className="ellipse"
          style={{ position: "absolute", bottom: 10, right: 60, zIndex: 1 }}
        >
          <Ellipse n={15} color={"#EF4358"} />
        </ul>
        <svg
          style={{ position: "absolute", bottom: 50, left: 160 }}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16.9998"
            cy="17"
            r="14.5"
            stroke="#FFBA49"
            strokeWidth="5"
          />
        </svg>
        <svg
          style={{ position: "absolute", bottom: 250, right: 160 }}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16.9998"
            cy="17"
            r="14.5"
            stroke="#FFBA49"
            strokeWidth="5"
          />
        </svg>

        <svg
          style={{ position: "absolute", bottom: 120, left: 90 }}
          width="76"
          height="76"
          viewBox="0 0 76 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="37.8674"
            cy="37.8677"
            r="28.0887"
            transform="rotate(16.0891 37.8674 37.8677)"
            stroke="#FFBA49"
            strokeWidth="5"
          />
        </svg>

        <h1
          style={{
            width: "600px",
            margin: "40px auto",
            color: "#272D4E",
            fontFamily: "Circular Std",
            fontWeight: "bold",
          }}
        >
          Supported by real people
        </h1>
        <p
          style={{
            width: "600px",
            margin: "40px auto",
            color: "#94A2B3",
            fontFamily: "Roboto",
          }}
        >
          Our team of Happiness Engineers works remotely from 58 countries
          providing customer support across multiple time zones.
        </p>
        <img
          src={image}
          alt="team"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 0,
            zIndex: 1,
            width: "900px",
          }}
        />
        <svg
          style={{
            position: "absolute",
            zIndex: 0,
            margin: "auto",
            left: "50%",
            transform: "translateX(-50%)",
            right: 0,
            bottom: -200,
          }}
          width="1300px"
          height="379"
          viewBox="0 0 1544 379"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M52.9998 222.044C52.9998 208.407 59.9575 195.757 71.9127 189.196C139.127 152.312 383.443 35 772 35C1160.56 35 1404.87 152.312 1472.09 189.196C1484.04 195.757 1491 208.407 1491 222.044V268C1491 290.091 1473.09 308 1451 308H92.9998C70.9084 308 52.9998 290.091 52.9998 268V222.044Z"
              fill="#EEEEEE"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0.146038"
              y="0.146282"
              width="1543.71"
              height="378.707"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="18" />
              <feGaussianBlur stdDeviation="26.4269" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.845 0 0 0 0 0.892895 0 0 0 0 0.975 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="page5-div2">
        <div>
          <p style={{ fontSize: "30px" }}>
            WooCommerce - the <b>most customizable eCommerce platform</b> for
            building
            <b> your online business.</b>
          </p>
          <Button
            style={{
              width: "250px",
              height: "40px",
              borderRadius: "50px",
              background: "none",
              border: "2px solid #fff",
            }}
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page5;
