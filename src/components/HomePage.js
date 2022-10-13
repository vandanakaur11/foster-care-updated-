import * as React from "react";
import Header from "./Header";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FosterCareCarousel from "./FosterCareCarousel";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* <div className="container">
        <img
          // className="homeImage"
          src={process.env.PUBLIC_URL + "/assets/HomeScreenImage.jpg"}
        />
        <Button variant="contained" className="btn">
          Donate
        </Button>
      </div> */}

      <div class="container">
        <img
          // className="homeImage"
          src={process.env.PUBLIC_URL + "/assets/HomeScreenImage.jpg"}
        />
        <div class="text-block">
          <h1
            style={{
              fontSize: "4rem",
              lineHeight: "1em",
              letterSpacing: "-0.05em",
              fontFamily: "proxima-nova-condensed sans-serif",
              fontWeight: 700,
              fontSize: "6rem",
              marginBottom: "0.5em",
              lineHeight: "1em",
              color: "white",
              textShadow: "1px 1px 4px rgb(0 0 0 / 75%)",
            }}
          >
            Healing children <br /> from abuse and <br /> neglect starts here.
          </h1>
          <Button
            variant="contained"
            className="btn"
            style={{ width: 250, height: 50, backgroundColor: "#0f4876" }}
          >
            Donate Now
          </Button>
        </div>
      </div>
      <div>
        <h1 className="bodyText">
          Transforming the lives of children who have experienced abuse and
          neglect.
        </h1>
        <div className="divHomeStatus">
          <p className="homeStatus">
            Every week, 126 new children in Georgia are removed from their homes
            and placed into the foster care system by the Division of Family and
            Children Services due to abuse, neglect, addictions, violence and
            more. These numbers are heartbreaking and tragic, but they are very
            real numbers representing very real children who we cannot ignore.
            We want to ensure that every child who comes into the foster system
            is nurtured in a loving, safe foster home where they will have the
            opportunity to heal and experience the love of Jesus.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: "70%",
            marginBottom: 50,
          }}
        >
          <ul id="home-welcome-stats" class="small-block-grid-2">
            <li>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#278dc1",
                  fontSize: "6.5rem",
                  fontFamily: "proxima-nova-condensed sans-serif",
                  fontWeight: 700,
                  marginBottom: "0.15em",
                }}
              >
                18
              </h2>
              <p
                style={{
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "430px",
                  fontSize: 20,
                }}
              >
                The average daily number of Georgia's children removed from
                their homes and placed into foster care.{" "}
              </p>
            </li>
            <li>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#fdc741",
                  fontSize: "6.5rem",
                  fontFamily: "proxima-nova-condensed sans-serif",
                  fontWeight: 700,
                  marginBottom: "0.15em",
                }}
              >
                400
              </h2>
              <p
                style={{
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "430px",
                  fontSize: 25,
                  marginBottom: 20,
                }}
              >
                The number of foster children and youth living in hotels on any
                given day because there are not enough foster homes.{" "}
              </p>
            </li>
            <li>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#0f4876",
                  fontSize: "6.5rem",
                  fontFamily: "proxima-nova-condensed sans-serif",
                  fontWeight: 700,
                  marginBottom: "0.15em",
                }}
              >
                45%
              </h2>
              <p
                style={{
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "430px",
                  fontSize: 25,
                }}
              >
                The percentage of Georgia's children who are removed from homes
                due to neglect
              </p>
            </li>
            <li>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#278dc1",
                  fontSize: "6.5rem",
                  fontFamily: "proxima-nova-condensed sans-serif",
                  fontWeight: 700,
                  marginBottom: "0.15em",
                }}
              >
                11,840
              </h2>
              <p
                style={{
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "430px",
                  fontSize: 25,
                }}
              >
                The number of children currently in Georgia's foster care
                system.{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="seeNeed">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs>
              <img
                // className="homeImage"
                src={process.env.PUBLIC_URL + "/assets/houses-a.svg"}
                style={{ marginTop: 185 }}
              />
            </Grid>
            <Grid item xs={4}>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    textAlign: "center",
                    width: "100%",
                    marginBottom: 20,
                  }}
                >
                  See the Need in Your Area
                </h1>
                <h5
                  style={{
                    color: "#0f4876",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    width: "100%",
                    marginBottom: 30,
                  }}
                >
                  Type your county below to see the latest statistics.
                </h5>
                <div
                  className="searchbox-wrap"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Country Name"
                    className="inputText"
                  />
                  <button class="button button-navy" type="submit">
                    Go
                  </button>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <img
                  // className="homeImage"
                  src={process.env.PUBLIC_URL + "/assets/houses-b.svg"}
                  style={{ marginTop: 210 }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div
        className="FaithBridgeContainer"
        style={{
          backgroundColor: "#f8f8f8",
          // width: "100%",
          margin: 0,
          pedding: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 100,
            // backgroundColor: "#f8f8f8",
          }}
        >
          <h1 className="FaithBridge">FaithBridge Stories</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 100,
          }}
        >
          <FosterCareCarousel />
        </div>
      </div>
      <div
        style={{
          margin: 100,
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "5em",
          }}
        >
          Answer the Call
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2.5em",
            textAlign: "center",
          }}
        >
          Join us in our mission to solve the foster care crisis. Below are ways
          you can get involved in foster care ministry today!
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 100,
          }}
        >
          <div
            style={{
              backgroundColor: "#278dc1",
              width: 200,
              height: 200,
              borderRadius: "50%",
            }}
          >
            <img
              // className="homeImage"
              src={process.env.PUBLIC_URL + "/assets/icon-church.svg"}
              style={{
                marginTop: 30,
                marginLeft: 37,
                width: 120,
                height: 120,
              }}
            />
            <p style={{ marginTop: 65 }}>Church Ministries</p>
          </div>
          <div
            style={{
              backgroundColor: "#fdc741",
              width: 200,
              height: 200,
              borderRadius: "50%",
            }}
          >
            <img
              // className="homeImage"
              src={process.env.PUBLIC_URL + "/assets/icon-family.svg"}
              style={{
                marginTop: 30,
                marginLeft: 37,
                width: 120,
                height: 120,
              }}
            />
            <p style={{ marginTop: 65 }}>Foster Families</p>
          </div>
          <div
            style={{
              backgroundColor: "#0f4876",
              width: 200,
              height: 200,
              borderRadius: "50%",
            }}
          >
            <img
              // className="homeImage"
              src={process.env.PUBLIC_URL + "/assets/icon-diploma.svg"}
              style={{
                marginTop: 30,
                marginLeft: 37,
                width: 120,
                height: 120,
              }}
            />
            <p style={{ marginTop: 65 }}>Training Opportunities</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
