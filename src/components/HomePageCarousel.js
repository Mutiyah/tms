import * as React from "react";
import homeStyles from "../styles/HomePageStyle.module.css";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useHistory } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function HomePageCarousel() {
  const history = useHistory();

  const btnRoute = () => {
    history.push("/about-us");
  };
  const carouselContent = [
    {
      heading: "Chit",
      subHead : "hub",
      content:
        "ChitHub is providing traffic enforcement agencies at both state and federal government levels with end-to-end traffic enforcement and penalty management solution to keep cities safe and promote the right behaviors in road users.",
      btn: "More About Us",
    },
    {
      heading: "Chit",
      subHead : "hub",
      content:
        "Transforming Traffic Enforcement and Penalty Management in Nigeria.",
      btn: "More About Us",
    },
    {
      heading: "Chit",
      subHead : "hub",
      content:
        "Our traffic enforcement solution is bespoke and developed using IoT, AI and computer vision technologies.",
      btn: "More About Us",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div
      sx={{ width: "100%", flexGrow: 1, overflowX: "hidden"}}
      className={homeStyles.carouselWrapper}
    >
      <div></div>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x" : "x-reverse"}
        // index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {carouselContent.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                key={index}
                className={homeStyles.carouselWrapperOverlay}
              >
                <h1>{step.heading}<span className={homeStyles.carouselWrapperOverlaySubHead}>{step.subHead}</span></h1>
                <p>{step.content}</p>
                <Button
                  onClick={btnRoute}
                  className={homeStyles.carouselBtn}
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                >
                  {step.btn}
                </Button>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default HomePageCarousel;
