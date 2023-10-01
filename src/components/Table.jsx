import {
  Box,
  Checkbox,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { Fragment, useContext } from "react";
import "../App.css";
import { ServiceContextProv } from "../context/ServiceContext";

const TableList = ({
  allowAction,
  sx,
  gradient,
  fixedColumn,
  lightBg,
  accordion,
  rowCount,
  numSelected,
  tableHeaders,
  onSelectAllClick,
  TableBodyContent,
  allCheckName,
  isRetailShort,
  isRetailLong,
  isCorporateShort ,
  isCorporateLong,
  onRetailShortClick,
  onRetailLongClick,
  onCorporateShortClick,
  onCorporateLongClick,
  onAllCheckClick
}) => {


  console.log("allCheckName", allCheckName);

  
  const contextData = useContext(ServiceContextProv);
  const { isAllCheck  } = contextData;

  return (


    <Fragment>
      <TableContainer
        className="showScrollBar"
        component={Paper}   
        sx={{
          boxShadow: "none",
          height: allowAction ? "calc(100% - 110px)" : "calc(100% - 60px)",
          overflow: "auto",
          ...sx,
        }}
        id="myID"
      >
        <Table
          stickyHeader
          sx={{
            minWidth: 500,
            borderCollapse: gradient ? "separate" : "collapse",
          }}
          className={fixedColumn ? "MuiTableColumn-fixed" : ""}
        >
          <TableHead className="tableHead">
            <TableRow aria-label={"Table Header"}>
              {tableHeaders &&
                tableHeaders.map(
                  (th, i) =>
                    th.allowedUser && (
                      <TableCell
                        key={i}
                        aria-label={"Label:" + th.label}
                        // sortDirection={orderBy === i ? order : false}
                        rowSpan={th.rowSpan}
                        colSpan={th.clmnSpan}
                        className={
                          fixedColumn && th.label === "option"
                            ? "tableCell-more"
                            : ""
                        }
                        sx={{
                          fontWeight: "bold",
                          border: "none",
                          borderLeft: "none",
                          borderRight: "none",
                          padding: "0 15px",
                          backgroundColor: "transparent",
                          //   // textAlign: 'center',
                          //   minWidth: isTxnTable ? '110px' : '',
                          textAlign:
                            th.clmnSpan && th.clmnSpan > 1
                              ? "center"
                              : th.label === "DiscountAmount"
                              ? "right"
                              : "left",
                          "&:first-of-type": {
                            // borderLeft: '1px solid #ddd',
                            borderRadius: "10px 0 0 10px !important",
                          },
                          "&:last-of-type": {
                            // borderRight: '1px solid #ddd',
                            borderRadius: "0px 10px 10px 0 !important",
                            backgroundColor: "transparent",
                          },
                        }}
                        id={th.label == "option" ? "optionId" : ""}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            // justifyContent: isTxnTable && 'left',
                          }}
                        >
                          {th.checked ? (
                            <>
                              <Grid sx={{ display: "flex" }}>
                                <Checkbox
                                  sx={{ padding: 0 }}
                                  checked={
                                    !isAllCheck ? (
                                    th.label === "Retails Short Stay" 
                                    ?  isRetailShort
                                    : th.label === "Retails Long Stay" 
                                    ? isRetailLong 
                                    : th.label === "Corporate Long Stay"
                                    ? isCorporateShort 
                                    : isCorporateLong ) : true
                                  }
                                  color="primary"
                                  indeterminate={
                                    numSelected != null &&
                                    rowCount != null &&
                                    numSelected > 0 &&
                                    numSelected < rowCount
                                  }
                                  inputProps={{
                                    "aria-label": "select all Fields",
                                  }}
                                  onChange={
                                    !isAllCheck ? (
                                    th.label === "Retails Short Stay" 
                                    ?  onRetailShortClick
                                    : th.label === "Retails Long Stay" 
                                    ? onRetailLongClick 
                                    : th.label === "Corporate Long Stay"
                                    ? onCorporateShortClick 
                                    : onCorporateLongClick) : onAllCheckClick 
                                    }
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "600", ml: "15px" }}
                                >
                                  {th.label}
                                </Typography>
                              </Grid>
                            </>
                          ) : (
                            <Typography variant="body2" fontWeight="600">
                              {th.label}
                            </Typography>
                          )}
                        </Box>
                      </TableCell>
                    )
                )}
            </TableRow>
          </TableHead>

          <TableBody
            className={
              gradient
                ? "MuiTableGradient-magic"
                : lightBg
                ? "MuiTableGradient-magic"
                : accordion
                ? "MuiTableGradient-magic AccordionCell-magic"
                : ""
            }
          >
            <TableBodyContent />
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default TableList;
