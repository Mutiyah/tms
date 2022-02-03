import gsap from 'gsap/all';
import React, {useEffect, useRef} from 'react';
import solutionStyles from '../styles/SolutionPageStyle.module.css';
import homeStyles from "../styles/HomePageStyle.module.css";


import Card from "@mui/material/Card";
import { CardActionArea } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {ceoLeftSlide2 } from '../animatons/pageAnimations';

function SolutionsPage() {
  const homeSolutions2 = [
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
    {
      image: "./images/iotimg.jpg",
      heading: "Artificial Intelligence and deep learning powered detection technology",
      content:
        "At the heart of our solution is our cloud system that connects autonomous and manned IoT devises. The cloud computer infrastructure provides the data and machine learning computing required to support our solutions.",
    },
  ];

  const firstRef = useRef();
  const anima = useRef();
  const anima2 = useRef();
    useEffect(() => {
       ceoLeftSlide2(firstRef) 
       gsap.fromTo(
            anima.current,
            { x: '-100vw' },
            {
              x: '0vw',
              scrollTrigger: {
                trigger: anima.current,
                start: "top 80%",
                toggleActions: "restart none restart none",
              },
              duration: 2,
            }
          );
      
          gsap.fromTo(
            anima2.current,
            { x: '100vw' },
            {
              x: '0vw',
              scrollTrigger: {
                trigger: anima2.current,
                start: "top 80%",
                toggleActions: "restart none restart none",
              },
              duration: 1,
            }
          );
    }, []);
    
  return <div className={solutionStyles.solutionPage}>
      <section className={solutionStyles.solutionPageTopmost}>
          <div className={solutionStyles.solutionPageTopmostOverlay}>
            <h1 ref={firstRef}>Our Solutions</h1>
          </div>
      </section>
      <section className={solutionStyles.solutionPageEtraffika}>
        <div>
          <h1>ETraffika</h1>
        </div>
        <div className={solutionStyles.solutionPageEtraffikaTextCan}>
          <div ref={anima} className={solutionStyles.solutionPageEtraffikaText}>
          <p>The Integrated Traffic Enforcement & Penalty Management System (eTraffika) solution is an end-to-end solution composed of Internet of Thing (IoT), cloud computing, mobile computing, artificial intelligence and computer vision to create a state-of-the-art robust electronic enforcement system. The solution has the capabilities to detect different types of road use violations real-time, notify drivers of their violations, provide authorities with detailed violation reports and manage vehicle data collections.</p>
          <p>Unlike other traffic violation management solutions, our product comprises of manned and unmanned devices combined with smart cameras and Artificial Intelligence (AI) that allows the 24/7 surveillance road networks and real-time data synchronization</p>
          </div>
          <div ref={anima2} className={solutionStyles.solutionPageEtraffikaImage}>
          <img src='/images/etraffika.jpg' alt="Etraffika" />
          </div>
        </div>
      </section>
      <section className={solutionStyles.solutions}>
        <div  className={solutionStyles.solutionsTextWrapper}>
          <h1>Services ETraffika provides</h1>
          <p>The eTraffika suite comprises of multiple microsystems which are loosely coupled to form a robust solution that caters for the entire enforcement and penalty lifecycle</p>
        </div>
        <div className={homeStyles.homeSolutionSection}>
        {homeSolutions2.map((solutionData, index) => (
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
      </section>
  </div>;
}

export default SolutionsPage;
