import React, { useRef, useEffect } from "react";
import homeStyles from "../styles/HomePageStyle.module.css";
import aboutStyle from "../styles/AboutUsPageStyle.module.css";
import { useHistory } from "react-router-dom";

import Card from "@mui/material/Card";
import { CardActionArea } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import gsap from "gsap/all";

function HomePageSolution() {
  const history = useHistory();
  const btnRoute = () => {
    history.push("/solutions");
  };

  const btnRouteContact = () => {
    history.push("/contact-us");
  };

  const homeSolutions = [
    {
      image: "./images/autonomous1.jpg",
      heading: "AUTONOMOUS (IOT) ROAD USE PENALTY/ENFORCEMENT SYSTEM",
      content:
        "Automatic plate number detection, red light violation detection, overspeed detection, parking lot optimmization vehicleclassification and many other safety measure systems.",
    },
    {
      image: "./images/manned.jpg",
      heading: "MANNED ENFORCEMENT SYSTEM",
      content:
        "The eTraffika Field Officer Solution is an end to end enforcement solution that provides handheld devices to field officers. The handheld devices are connected to a cloud backend real-time.",
    },
    {
      image: "./images/data.jpg",
      heading: "DATA VISUALIZATION & ANALYSIS",
      content:
        "Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.",
    },
  ];
  const ceoRef = useRef();
  const ceoRef1 = useRef();
  const ceoRef2 = useRef();
  useEffect(() => {
    gsap.fromTo(ceoRef.current, {x:'-100vw'}, { x: '0vw', duration: 2, ease: 'bounce', scrollTrigger: {trigger: ceoRef.current, start: "top 90%", toggleActions: "restart none restart none"}})
    gsap.fromTo(ceoRef1.current, {x:'-100vw'}, { x: '0vw', duration: 1, scrollTrigger: {trigger: ceoRef1.current, start: "top 90%", toggleActions: "restart none restart none"}})
    gsap.fromTo(ceoRef2.current, {x:'-100vw'}, { x: '0vw', duration: 1, scrollTrigger: {trigger: ceoRef2.current, start: "top 90%", toggleActions: "restart none restart none"}})

  }, []);
  return (
    <>
      <div className={homeStyles.HomePageSolutionCan}>
        <div className={homeStyles.homeSolutionSection}>
          {homeSolutions.map((solutionData, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, minWidth: "30vw" }}
              className={homeStyles.solutionCard}
            >
              <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={solutionData.image}
                alt="green iguana"
                className={homeStyles.cardImage}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  className={homeStyles.solutionheader}
                >
                  {solutionData.heading}
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={homeStyles.solutionBody}
                >
                  {solutionData.content}
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <Button
          onClick={btnRoute}
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          style={{ backgroundColor: "#fff", color: "#000" }}
          className={homeStyles.homeAboutUsBtn}
        >
          Know More
        </Button>
      </div>
      <section className={aboutStyle.ceoSection} style={{ marginTop: "60px" }}>
        <div className={aboutStyle.ceoSectionOverlay}>
          <p ref={ceoRef1}>
            "We are a <b>knowledge company</b> whose aim is to grow the
            capacities of traffic enforcement agencies by providing accurate
            detection and actionable data for the purpose of enforcing
            compliance."
          </p>
          <p ref={ceoRef2} className={aboutStyle.ceo}>
            <b>MICHAEL AGBOGO</b>
          </p>
          <b ref={ceoRef}>
            <small>CEO Chithub</small>
          </b>
          </div>
      </section>

      <section className={homeStyles.homeLetsTalk}>
        <div>
          <h1>Let's Talk</h1>
          <p>
            We'd love to hear from you, we are ready to answer any questions you
            have.
          </p>
        </div>
        <div>
          <Button
            onClick={btnRouteContact}
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            style={{ backgroundColor: "#fff", color: "#000" }}
            className={homeStyles.homeAboutUsBtn}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}

export default HomePageSolution;
