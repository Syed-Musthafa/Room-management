import { Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import React, { Fragment, useCallback, useContext, useState } from "react";
import PaperBase from "../../../layout/PaperBase";
import UserTabs from "./Tabs";
import { Bronze, Gold, Platinum, Silver } from "./SubTabs";
import IconHolder from "../../../components/IconButton";
import ServiceContext, {
  ServiceContextProv,
} from "../../../context/ServiceContext";

const Service = (props) => {
  const { value, index, ...other } = props;

  const contextData = useContext(ServiceContextProv);
  const {
    handleAdd,
    handleAllCheck,
    isAllCheck,
    userLabel,
    list,
    handleChangeTabs,
    handleClickTabs,
  } = contextData;

  // const [userLabel, setUserLabel] = useState("Bronze");
  // const [selected, setSelected] = useState([]);
  // const [list, setList] = useState(0);

  console.log("userLabel", userLabel);

  const tabs = [
    {
      label: "Bronze",
      Component: <Bronze />,
      allowed: true,
      name: "Bronze",
    },
    {
      label: "Silver",
      Component: <Silver />,
      allowed: true,
      name: "Silver",
    },
    {
      label: "Gold",
      Component: <Gold />,
      allowed: true,
      name: "Gold",
    },
    {
      label: "Platinum",
      Component: <Platinum />,
      allowed: true,
      name: "Platinum",
    },
  ];

  // const handleChangeTabs = useCallback((event, newValue) => {
  //   setList(newValue);
  //   setSelected([]);
  // }, []);

  // const handleClickTabs = useCallback(
  //   (name) => () => {
  //     setUserLabel(name);
  //     setSelected([]);
  //   },
  //   [userLabel]
  // );

  return (
    <Grid
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <PaperBase allowScroll contentType="allowScroll">
            <Grid>
              <UserTabs
                label={userLabel}
                tabs={tabs}
                handleChangeTabs={handleChangeTabs}
                handleClickTabs={handleClickTabs}
                currentTab={list}
              />

              <Grid sx={{ position: "absolute", top: 20, right: 20 }}>
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Checkbox
                    sx={{ padding: 0 }}
                    checked={isAllCheck}
                    color="primary"
                    inputProps={{
                      "aria-label": "select all Fields",
                    }}
                    // onChange={handleAllCheck}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", ml: "15px" }}
                  >
                    Select All
                  </Typography>

                  <Button
                    variant="text"
                    sx={{ borderRadius: "5px", px: "5px", ml: "20px" }}
                    onClick={handleAdd}
                  >
                    <IconHolder
                      icon="cirleAdd"
                      sx={{
                        "& .tab-iconBox": {
                          height: "24px",
                          width: "auto !important",
                        },
                      }}
                    />
                    Add Services
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </PaperBase>
        </>
      )}
    </Grid>
  );
};

export default Service;
