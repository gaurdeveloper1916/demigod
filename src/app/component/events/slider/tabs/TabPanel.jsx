"use client";
import * as React from "react";
import PropTypes from "prop-types";
import {
  useTheme,
  useMediaQuery,
  AppBar,
  Tabs,
  Tab,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuIcon from "@mui/icons-material/Menu";

import "./tabs.css";
import { useState } from "react";
import Link from "next/link";

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


const ImageSlider = () => {
  const [hoveredIndices, setHoveredIndices] = useState(Array(4).fill(false));
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
  };
  

  const images = [
    "https://media.istockphoto.com/id/493958679/photo/audience-at-the-conference-hall.jpg?s=612x612&w=0&k=20&c=xd25jricV0WozAldp8zC0wthPmKCzZcVrzf8bM1U8EY=",
    "https://media.istockphoto.com/id/2148966237/photo/joyful-senior-friends-in-props-dancing-with-wineglasses-while-partying-together-at-home.jpg?s=612x612&w=0&k=20&c=eTbibxvMlJDcxhNyktcdmWhxqI9TnBpxxy9MadJ69Fc=",
    "https://media.istockphoto.com/id/1316091115/photo/female-colleagues-on-a-break-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=p6wd945A1ITdy85tsT6cTl7smSNtfwItOE3evQ7WjFo=",
    "https://media.istockphoto.com/id/140449928/photo/information-for-the-mass.jpg?s=612x612&w=0&k=20&c=jgIIE1qAEWr7-y_cNu-_m2aVHu4nr4sxQRkDu__CsGY=",
  ];

  const handleMouseEnter = (index) => {
    const newHovered = [...hoveredIndices];
    newHovered[index] = true;
    setHoveredIndices(newHovered);
  };

  const handleMouseLeave = (index) => {
    const newHovered = [...hoveredIndices];
    newHovered[index] = false;
    setHoveredIndices(newHovered);
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="d-flex  position-relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={image}
              className="w-100 m-2 rounded"
              style={{ height: isSmallScreen ? "200px" : "300px" }}
              alt={`slide-${index}`}
            />
            <Link href="/landingpage">
              <button className="position-absolute border-0 bottom-0 start-50 translate-middle-x btn btn-primary">
                View Events
              </button>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const list = ["HEALTHCARE", "NIGHTLIFE", "RELIGIOUS", "ARTS", "EDUCATION", "EXHIBITION"]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className={isSmallScreen ? "col-12" : "col-lg-10"}>
        <Box sx={{ bgcolor: "background.", width: "100%" }}>
          <AppBar style={{ backgroundColor: "black" }} position="static">

            {isSmallScreen ? (
              <>
                <div style={{backgroundColor:'#866b2f'}} className="d-flex justify-content-between px-4  ">
                 
                  <p className="mt-3 fw-bold">Explore More Events</p>
                  <p className="m-0 mt-3" color="inherit " aria-label="menu" onClick={handleDrawerToggle} sx={{ ml: 2 }}>
                    <MenuIcon color="white" />
                  </p>
                </div>

                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                  PaperProps={{
                    sx: { width: 250, backgroundColor: "#333", color: "#fff" },
                  }}
                >
                  <List>
                    <ListItem sx={{ textAlign: "center", py: 2 }}>
                      <ListItemText primary="Menu" primaryTypographyProps={{ variant: "h6" }} />
                    </ListItem>
                    <Divider />
                    {list.map((label, index) => (
                      <ListItem button key={index} onClick={() => { setValue(index); handleDrawerToggle(); }}>
                        <ListItemText primary={label} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="full width tabs example"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  "& .MuiTab-root": {
                    backgroundColor: "black",
                    color: "white",
                    "&.Mui-selected": {
                      backgroundColor: "blue",
                      color: "white",
                    },
                  },
                }}
              >
                {list.map((label, index) => (
                  <Tab key={index} label={label} {...a11yProps(index)} />
                ))}
              </Tabs>
            )}
          </AppBar>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TabPanel key={index} value={value} index={index} dir={theme.direction}>
              <p className="text-white px-2 fw-bold text-center fw-medium">{`${list[value]} EVENTS`}</p>
              <ImageSlider />
              <ImageSlider />
            </TabPanel>
          ))}
        </Box>
      </div>
    </div>
  );
}
