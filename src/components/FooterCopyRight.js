import * as React from "react";
import "../FooterCopyRight.css";

export default function Header(props) {
  return (
    <>
      <footer className="section bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ marginLeft: 100 }}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/logo.png"}
                  style={{ width: "100%", height: 100 }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                id="copyright-text"
                className="small-12 medium-12 large-4 columns"
              >
                <p style={{ fontSize: "2em" }}>
                  <a href="/privacy/">Privacy Policy</a> |
                  <a href="/contact-us">Contact Us</a>
                  <br />
                  <small>© 2021 FaithBridge Foster Care</small>
                  <br />
                  <small>
                    <a href="http://www.zaxiscreative.com">
                      Site by Z-AXIS Creative
                    </a>
                  </small>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 200,
                }}
              >
                <a
                  class="footer-logo logo-ffta"
                  target="_blank"
                  href="https://ffta.imiscloud.com/"
                  title="Family Focused Treatment Association"
                  alt="FFTA Logo"
                >
                  <img
                    // className="homeImage"
                    src={
                      process.env.PUBLIC_URL + "/assets/FooterLogo/logo-bcw.png"
                    }
                    style={{ width: 80, height: 80, marginLeft: 10 }}
                  />
                </a>
                <a
                  class="footer-logo logo-ecfa"
                  target="_blank"
                  href="http://www.ecfa.org/MemberProfile.aspx?ID=33839"
                  title="Member, ECFA"
                  alt="ECFA Logo"
                >
                  <img
                    // className="homeImage"
                    src={
                      process.env.PUBLIC_URL + "/assets/FooterLogo/logo-coa.png"
                    }
                    style={{ width: 80, height: 80, marginLeft: 10 }}
                  />
                </a>
                <a
                  class="footer-logo logo-cafo"
                  target="_blank"
                  href="http://cafo.org"
                  title="Christian Alliance for Orphans"
                  alt="CAFO Logo"
                >
                  <img
                    // className="homeImage"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/FooterLogo/logo-cafo.png"
                    }
                    style={{ width: 80, height: 80, marginLeft: 10 }}
                  />
                </a>
                <a
                  class="footer-logo logo-coa"
                  target="_blank"
                  href="http://coanet.org/"
                  title="Council on Accreditation - Accredited"
                  alt="Council on Accreditation Logo"
                >
                  <img
                    // className="homeImage"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/FooterLogo/logo-ecfa.png"
                    }
                    style={{ width: 80, height: 80, marginLeft: 10 }}
                  />
                </a>
                <a
                  class="footer-logo logo-bcw"
                  target="_blank"
                  href="https://www.bcwinstitute.org/bcw-lists/"
                  title="Best Christian Workplaces Certified"
                  alt="Best Christian Workplaces Certified"
                >
                  <img
                    // className="homeImage"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/FooterLogo/logo-ffta.png"
                    }
                    style={{ width: 80, height: 80, marginLeft: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
