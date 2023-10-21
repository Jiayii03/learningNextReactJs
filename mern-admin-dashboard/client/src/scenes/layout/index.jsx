import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)"); // returns a boolean value, depending on whether the minimum width is achieved on the screen. If it's a mobile screen, isNonMobile shall returns false, else true.
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId); // redux toolkit
  /* useGetUserQuery(userId) returns an object of many properties, including currentData, data, isError, isLoading, etc.
  Since we only want the data as our final information, we destructure { data } to get that piece of information.
  */
  const { data } = useGetUserQuery(userId); // redux toolkit query, call the api endpoint general/user/{userId} as defined in the back-end routes/general.js, which call the getUser function defined in controllers/general.js

  return (
    // material ui has a property called Box
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      {/* Sidebar at the left side */}
      <Sidebar
        user={data || {}} // or {} because the data might sometimes be undefined when it's loading
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {/* Whole box at the right side */}
      <Box width="100%">
        <Navbar
          user={data || {}}
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
