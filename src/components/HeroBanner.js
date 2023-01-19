import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      color="#fff"
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography
      color="#fff"
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      mb={6}
    >
      Check out the most effective exercises personalized to you
    </Typography>
    <Button
      variant="contained"
      color="error"
      href="#exercises"
      sx={{ backGroundColor: "#FF2625", padding: "8px" }}
    >
      Explore New Workouts
    </Button>

    <Typography
      fontWeight={600}
      color="#ffff"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
