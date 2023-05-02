import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div
      id="home"
      style={{
        // position: "absolute",
        // top: "-20px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundImage: `url(${require("./../assets/img/sample.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div>
          <div className="middleBox">
            {/* <img
              src={require("./../assets/img/ieee_logo.png")}
              style={{
                height: "90px",
              }}
              alt="logo"
            /> */}
            <img
              src={require("./../assets/img/nitd_logo.jpg")}
              style={{
                height: "100px",
                width: "100px",
              }}
              alt="logo"
            />
            <div>
              <h2
                style={{
                  fontFamily: "Noto Sans",
                  fontSize: "30px",
                }}
              >
                Department of Electronics and Communication Engineering
              </h2>
              {/* <h2
                style={{
                  fontFamily: "Noto Sans",
                }}
              >
                Of
              </h2> */}
              <h2
                style={{
                  fontFamily: "Noto Sans",
                  fontSize: "30px",
                }}
              >
                National Institute of Technology Delhi
              </h2>
            </div>
          </div>
          <h3
            style={{
              color: "black",
              marginTop: "20px",
            }}
          >
            Presents
          </h3>
          <h3
            style={{
              color: "rgb(68, 1, 68)",
              fontWeight: "bold",
            }}
          >
            First International Conference on
          </h3>
          <h3
            style={{
              color: "rgb(68, 1, 68)",
              fontWeight: "bold",
            }}
          >
            Microelectronics, Communication and Signal Processing
          </h3>
          <h3
            style={{
              color: "rgb(68, 1, 68)",
              fontWeight: "bold",
            }}
          >
            (ICMCSP 2024)
          </h3>
        </div>
        <h3
          style={{
            color: "black",
            marginTop: "10px",
          }}
        >
          Aug 9-11, 2024
        </h3>
        <div className="socialIconsBar">
          <ul>
            <li className="socialIcons">
              <AiFillFacebook />
            </li>
            <li className="socialIcons">
              <AiFillTwitterCircle />
            </li>
            <li className="socialIcons">
              <AiOutlineInstagram />
            </li>
            <li className="socialIcons">
              <AiFillLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
