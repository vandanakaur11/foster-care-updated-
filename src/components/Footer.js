import * as React from "react";
import "../Footer.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FooterCopyRight from "./FooterCopyRight";

export default function Header(props) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <footer id="contact">
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className="footerText">
                <h2
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                    fontSize: "3em",
                  }}
                >
                  Stay Up To Date with FaithBridge
                </h2>
                <p
                  style={{
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    fontSize: "1.5em",
                    textAlign: "start",
                  }}
                >
                  Stay informed about the latest training opportunities,
                  stories, and news that impacts Foster Care in the state of
                  Georgia
                </p>
                <ul>
                  <div id="icon-container">
                    <a href="#">
                      <div id="icon">
                        <img
                          // className="homeImage"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/FooterLogo/icon-facebook.svg"
                          }
                        />
                      </div>
                    </a>
                    <a href="#">
                      <div id="icon">
                        <img
                          // className="homeImage"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/FooterLogo/icon-twitter.svg"
                          }
                        />
                      </div>
                    </a>
                    <a href="#">
                      <div id="icon">
                        <img
                          // className="homeImage"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/FooterLogo/icon-youtube.svg"
                          }
                        />
                      </div>
                    </a>
                    <a href="#">
                      <div id="icon">
                        <img
                          // className="homeImage"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/FooterLogo/icon-linkedin.svg"
                          }
                        />
                      </div>
                    </a>
                  </div>
                </ul>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div style={{ marginTop: 100 }}>
                <button class="btn btn-large btn-newsLetter">
                  E-Newsletter
                </button>
              </div>
            </Grid>
          </Grid>
        </footer>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <div>
          {/* <div className="container" /> */}
          <footer>
            {/* Footer main */}
            <section className="ft-main">
              <div className="ft-main-item" style={{ marginBottom: 130 }}>
                <h2 className="ft-title">Churches</h2>
                <ul>
                  <li>
                    <a href="#">Ministry</a>
                  </li>
                  <li>
                    <a href="#">Why Start a Ministry?</a>
                  </li>
                  <li>
                    <a href="#">Get Involved</a>
                  </li>
                  <li>
                    <a href="#">Volunteers and Respite</a>
                  </li>
                  <li>
                    <a href="#">Resources for Churches</a>
                  </li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Foster Care</h2>
                <ul>
                  <li>
                    <a href="#">What is Foster Care?</a>
                  </li>
                  <li>
                    <a href="#">Why Foster?</a>
                  </li>
                  <li>
                    <a href="#">Become a Foster Parent</a>
                  </li>
                  <li>
                    <a href="#">Foster Care Adoption</a>
                  </li>
                  <li>
                    <a href="#">Resources for Foster Parents</a>
                  </li>
                  <li>
                    <a href="#">Foster Care FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Training</h2>
                <ul>
                  <li>
                    <a href="#">Foster Parent Training</a>
                  </li>
                  <li>
                    <h2 className="ft-title">Blog</h2>
                  </li>
                  <li>
                    <h2 className="ft-title">Newsletter</h2>
                  </li>
                  <li>
                    <h2 className="ft-title">Contact Us</h2>
                  </li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Donate</h2>
                <ul>
                  <li>
                    <a href="#">Get Involved</a>
                  </li>
                  <li>
                    <a href="#">Start a Ministry</a>
                  </li>
                  <li>
                    <a href="#">Become a Foster Parent</a>
                  </li>
                  <li>
                    <a href="#">Donate</a>
                  </li>
                  <li>
                    <a href="#">Monthly Giving</a>
                  </li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Hope Runs Deep</h2>
                <ul>
                  <li>
                    <a href="#">FaithBridge Resources</a>
                  </li>
                  <li>
                    <a href="#">Resources for Churches</a>
                  </li>
                  <li>
                    <a href="#">Resources for Foster Parents</a>
                  </li>
                  <li>
                    <a href="#">MyFaithBridge Portal</a>
                  </li>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">About Us</h2>
                <ul>
                  <li>
                    <a href="#">Why FaithBridge</a>
                  </li>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Our Vision and Mission</a>
                  </li>
                  <li>
                    <a href="#">Our Statement of Beliefs</a>
                  </li>
                  <li>
                    <a href="#">Our Leadership</a>
                  </li>
                  <li>
                    <a href="#">In the News</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </section>
          </footer>
        </div>
      </Box>
      <FooterCopyRight />
    </>
  );
}
