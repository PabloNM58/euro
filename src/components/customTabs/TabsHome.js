import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Home from "../../Home";
import CheckNumbersTimes from "../results/CheckNumbersTimes";
import CustomTabPanel from "./CustomTabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsHome() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Comprobar combinación" {...a11yProps(0)} />
          <Tab label="Comprobar número" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Home />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CheckNumbersTimes />
      </CustomTabPanel>
    </Box>
  );
}
