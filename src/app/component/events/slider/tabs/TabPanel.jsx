"use client";
import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./tabs.css";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Custom Slider Component
const ImageSlider = () => {
  const [hovered, setHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 2 images at a time
    slidesToScroll: 1,
    arrows: true, // Enable previous/next buttons
  };

  // Replace these images with the actual ones you need
  const images = [
    "https://media.istockphoto.com/id/493958679/photo/audience-at-the-conference-hall.jpg?s=612x612&w=0&k=20&c=xd25jricV0WozAldp8zC0wthPmKCzZcVrzf8bM1U8EY=",
    "https://media.istockphoto.com/id/2148966237/photo/joyful-senior-friends-in-props-dancing-with-wineglasses-while-partying-together-at-home.jpg?s=612x612&w=0&k=20&c=eTbibxvMlJDcxhNyktcdmWhxqI9TnBpxxy9MadJ69Fc=",
    "https://media.istockphoto.com/id/1316091115/photo/female-colleagues-on-a-break-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=p6wd945A1ITdy85tsT6cTl7smSNtfwItOE3evQ7WjFo=",
    "https://media.istockphoto.com/id/140449928/photo/information-for-the-mass.jpg?s=612x612&w=0&k=20&c=jgIIE1qAEWr7-y_cNu-_m2aVHu4nr4sxQRkDu__CsGY=",
  ];

  return (
    <>
      {/* First Row */}
      <Slider {...settings}>
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className="d-flex">
            <img
              src={image}
              className="w-100 m-2 rounded"
              style={{ height: "300px" }}
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Slider>
      {/* Second Row */}
      <Slider {...settings}>
        {images.slice(2, 4).map((image, index) => (
          <div
            key={index}
            className="d-flex position-relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={image}
              className="w-100 m-2 rounded"
              style={{ height: "300px" }}
              alt={`slide-${index}`}
            />
            {hovered ? (
              <button className="position-absolute bottom-0 start-50 translate-middle-x btn btn-primary">
                View Events
              </button>
            ) : (
              <p  style={{ bottom: "10px" }} className="position-absolute pb-5 start-50 translate-middle-x text-white">
                Know More
              </p>
            )}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 ">
      <div className="col-lg-10 ">
        <Box sx={{ bgcolor: "background.", width: "100%" }}>
          <AppBar style={{ backgroundColor: "" }} position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              style={{
                backgroundColor: "",
                borderRadius: "100px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <Tab
                style={{
                  backgroundColor: value === 0 ? "blue" : "black",
                  color: value === 0 ? "white" : "inherit",
                }}
                label="HEALTHCARE"
                {...a11yProps(0)}
              />
              <Tab
                style={{
                  backgroundColor: value === 1 ? "blue" : "black",
                  color: value === 1 ? "white" : "inherit",
                }}
                label="NIGHTLIFE"
                {...a11yProps(1)}
              />
              <Tab
                style={{
                  backgroundColor: value === 2 ? "blue" : "black",
                  color: value === 2 ? "white" : "inherit",
                }}
                label="RELIGIOUS"
                {...a11yProps(2)}
              />
              <Tab
                style={{
                  backgroundColor: value === 3 ? "blue" : "black",
                  color: value === 3 ? "white" : "inherit",
                }}
                label="ARTS"
                {...a11yProps(3)}
              />
              <Tab
                style={{
                  backgroundColor: value === 4 ? "blue" : "black",
                  color: value === 4 ? "white" : "inherit",
                }}
                label="EDUCATION"
                {...a11yProps(4)}
              />
              <Tab
                style={{
                  backgroundColor: value === 5 ? "blue" : "black",
                  color: value === 5 ? "white" : "inherit",
                }}
                label="EXHIBITION"
                {...a11yProps(5)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ImageSlider />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ImageSlider />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ImageSlider />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <ImageSlider />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <ImageSlider />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <ImageSlider />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
