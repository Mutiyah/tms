import React, { useEffect, useRef } from "react";
import homeStyles from "../styles/HomePageStyle.module.css";
import { useHistory } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HomePageCarousel from "./HomePageCarousel";

import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomePageSolution from "./HomePageSolution";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const anima = useRef();
  const anima2 = useRef();

  useEffect(() => {
    const leftSlide = (refVal) => {
    gsap.fromTo(
      refVal.current,
      { x: '-100vw' },
      {
        x: '0vw',
        scrollTrigger: {
          trigger: refVal.current,
          start: "top 95%",
          toggleActions: "restart none restart none",
        },
        duration: 2,
      }
    );
    }
    const rightSlide = (refVal2) => {
    gsap.fromTo(
      refVal2.current,
      { x: '100vw' },
      {
        x: '0vw',
        scrollTrigger: {
          trigger: refVal2.current,
          start: "top 95%",
          toggleActions: "restart none restart none",
        },
        duration: 2,
      }
    );
    }
    leftSlide(anima)
    rightSlide(anima2)
  }, []);

  const history = useHistory();
  const btnRoute = () => {
    history.push("/about-us");
  };
  return (
    <div style={{position: 'relative'}}>
      <HomePageCarousel />
      <section className={homeStyles.homeAboutUs} >
        <div className={homeStyles.homeAboutUsTextTop}>
          <h1>About Us:</h1>
          <p className={homeStyles.homeAboutUsText1}>
            Transforming Traffic Enforcement and Penalty Management in Nigeria
          </p>
        </div>
        <div className={homeStyles.homeAboutUsText} ref={anima} >
          <div className={homeStyles.homeAboutUsTextTop2}>
            <h1>About Us:</h1>
            <p className={homeStyles.homeAboutUsText1}>
              Transforming Traffic Enforcement and Penalty Management in Nigeria
            </p>
          </div>
          <p  className={homeStyles.homeAboutUsText2}>
            Traffic enforcement agencies in Nigeria are faced with a plethora of
            challenges ranging from existing manual processes, unavailability of
            resources (human and capital), inadequate infrastructures, and lack
            of proper technology. Based on these limitations some motorists fail
            to obey simple traffic rules which in some cases lead to fatality.
          </p>
          <p  className={homeStyles.homeAboutUsText2}>
            ChitHub is providing traffic enforcement agencies at both state and
            federal government levels with an end-to-end traffic enforcement and
            penalty management solution to keep cities safe and promote the
            right behaviors in road users and security.
          </p>
          <p className={homeStyles.homeAboutUsText2}>
            Unlike other traffic violation management solutions, ChitHub
            solution suite comprises of manned and unmanned devices combined
            with smart cameras and Artificial Intelligence (AI) that allows 24/7
            surveillance road networks and real-time data synchronization.
          </p>
          <Button
            onClick={btnRoute}
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            style={{ backgroundColor: "#fff", color: "#000" }}
            className={homeStyles.homeAboutUsBtn}
          >
            Learn More
          </Button>
        </div>
        <div className={homeStyles.aboutImage} ref={anima2} >
          <img src="./images/aboutUs.jpg" />
        </div>
      </section>
      <HomePageSolution />
    </div>
  );
}

export default HomePage;
