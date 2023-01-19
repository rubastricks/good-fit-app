import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="90px" bgcolor="#165876">
      <Stack gap="0px" alignItems="center" pb="10px" pt="10px">
        <img src={Logo} alt="Logo" width="100px" height="40px" />
        <Typography variant="h8" pb="10px" mt="10px">
          Made By Alisson Rubas &copy;{" "}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
