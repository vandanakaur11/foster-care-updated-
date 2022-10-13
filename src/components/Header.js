import * as React from "react";
import Button from "@mui/material/Button";
import "../App.css";

export default function Header(props) {
  const BtnColor = "#fdc741";

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
        {/* One of the primary actions on mobile is to call a business - This displays a phone button on mobile only */}
        <div className="navbar-toggler-right">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              if (document.getElementById("navbar").style.display === "none") {
                document.getElementById("navbar").style.display = "block";
              } else {
                document.getElementById("navbar").style.display = "none";
              }
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div
          className="collapse navbar-collapse flex-column "
          id="navbar"
          style={{ backgroundColor: "white" }}
        >
          <div
            style={{
              // backgroundColor: "red",
              display: "flex",
              justifyContent: "flex-start",
              margin: 30,
            }}
          >
            <ul
              className="navbar-nav  w-100  px-3"
              style={{
                display: "flex",
                // justifyContent: "space-evenly",
                backgroundColor: "white",
              }}
            >
              <li className="nav-item active">
                <img
                  src={process.env.PUBLIC_URL + "/assets/logo.png"}
                  style={{ marginRight: 100 }}
                />
              </li>
              <li className="nav-item dropdown" style={{ marginTop: 10 }}>
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ fontSize: "3em", color: "#4b4b4b", marginRight: 20 }}
                >
                  Churches
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    What is a Foster Care Ministry?
                  </a>
                  <a className="dropdown-item" href="#">
                    Why Start a Ministry?
                  </a>
                  <a className="dropdown-item" href="#">
                    Get Involved
                  </a>
                  <a className="dropdown-item" href="#">
                    Volunteers and Respite
                  </a>
                  <a className="dropdown-item" href="#">
                    Resources for Churches
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    fontSize: "3em",
                    color: "#4b4b4b",
                    marginTop: 10,
                    marginRight: 20,
                  }}
                >
                  Foster Care
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    What is Foster Care?
                  </a>
                  <a className="dropdown-item" href="#">
                    Why Foster?
                  </a>
                  <a className="dropdown-item" href="#">
                    Become a Foster Parent
                  </a>
                  <a className="dropdown-item" href="#">
                    Foster Care Adoption
                  </a>
                  <a className="dropdown-item" href="#">
                    Resources for Foster Parents
                  </a>
                  <a className="dropdown-item" href="#">
                    Foster Care FAQs
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    fontSize: "3em",
                    color: "#4b4b4b",
                    marginTop: 10,
                    marginRight: 20,
                  }}
                >
                  Training
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Foster Parent Training
                  </a>
                </div>
              </li>
              <Button
                variant="contained"
                style={{
                  backgroundColor: BtnColor,
                  height: 40,
                  marginTop: 40,
                  marginLeft: 10,
                }}
              >
                Donate
              </Button>
              <Button
                variant="outlined"
                style={{ height: 40, marginTop: 40, marginLeft: 10 }}
              >
                Hope Runs Deep
              </Button>
            </ul>
          </div>
          <div style={{ width: "100%" }}>
            <ul
              className="navbar-nav  w-100 px-3"
              style={{
                backgroundColor: "#278dc1",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white", fontSize: "2em" }}
                >
                  About Us
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Why FaithBridge
                  </a>
                  <a className="dropdown-item" href="#">
                    Our Story
                  </a>
                  <a className="dropdown-item" href="#">
                    Our Vision and Mission
                  </a>
                  <a className="dropdown-item" href="#">
                    Our Statement of Beliefs
                  </a>
                  <a className="dropdown-item" href="#">
                    Our Leadership
                  </a>
                  <a className="dropdown-item" href="#">
                    In the News
                  </a>
                  <a className="dropdown-item" href="#">
                    Careers
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white", fontSize: "2em" }}
                >
                  Get Involved
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Start a Ministry
                  </a>
                  <a className="dropdown-item" href="#">
                    Become a Foster Parent
                  </a>
                  <a className="dropdown-item" href="#">
                    Donate
                  </a>
                  <a className="dropdown-item" href="#">
                    Monthly Giving
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white", fontSize: "2em" }}
                >
                  FaithBridge Resources
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Resources for Churches
                  </a>
                  <a className="dropdown-item" href="#">
                    Resources for Foster Parents
                  </a>
                  <a className="dropdown-item" href="#">
                    MyFaithBridge Portal
                  </a>
                  <a className="dropdown-item" href="#">
                    Videos
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "2em" }}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "2em" }}
                >
                  Newsletter
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "2em" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
