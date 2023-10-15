import React, { useState } from "react";
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
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      {/* Sidebar at the left side */}
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {/* Whole box at the right side */}
      <Box width="100%">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* The <Outlet> renders the rest of the children of the current route selected */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
