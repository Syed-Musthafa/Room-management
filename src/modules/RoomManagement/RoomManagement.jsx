import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Service from "./components/Service";
import Amenities from "./components/Amenities";
import ServiceContext from "../../context/ServiceContext";
import AmentiesContext from "../../context/AmentiesContext";
import { useContext } from "react";
import { RoomContextProv } from "../../context/RoomContext";

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const RoomManagement = () => {

  const contextData = useContext(RoomContextProv)
 const { value, handleChange  } = contextData



  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Services" {...a11yProps(0)} />
          <Tab label="Amenities" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <ServiceContext>
        <Service value={value} index={0} />
      </ServiceContext>

      <AmentiesContext>
        <Amenities value={value} index={1} />
      </AmentiesContext>
    </Box>
  );
};

export default RoomManagement;
