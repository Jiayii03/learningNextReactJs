import React, { useState } from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)"); // returns a boolean value, depending on whether the minimum width is achieved on the screen. If it's a mobile screen, isNonMobile shall returns false, else true. 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    // material ui has a property called Box
    <Box width="100%" height="100%">
        <Box>
            <Navbar />
            {/* The <Outlet> renders the current route selected */}
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout