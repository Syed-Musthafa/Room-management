import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FcExpand } from "react-icons/fc";
import IconHolder from "./IconButton";

function CustomDropdown({
  value,
  onChange,
  menuItem = [],
  label,
  sx = {},
  disableUnderline,
  defaultValue,
  isMultiple,
  onKeyDown,
  addButton,
  saveButton,
  handleText,
  required = false,
  onClick,
  name,
  options,
  edit,
  setOptions,
  newOption,
  isAddingOption,

  ...selectProps
}) {
  console.log("options", options);

  return (
    <div>
      <FormControl>
        <Grid sx={{ display: "flex", alignItems: "center",  width: "100px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {!isAddingOption ? (
              <Select
                name={name || ""}
                className="customerScrollBar"
                value={value ?? ""}
                onChange={onChange}
                onClick={onClick}
                displayEmpty
                inputProps={{
                  "aria-label": "Without label",
                }}
                variant="standard"
                fullWidth
                IconComponent={FcExpand}
                sx={{
                  ...sx,
                  margin: "0",
                  "& .MuiMenu-paper": {
                    height: "20px",
                  },
                  width: "70px",
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: {
                        xs: "10vh",
                        sm: "20vh",
                        overflowY: "scroll",
                      },
                      // height: '20vh',
                      overflowY: "scroll",
                      "&::-webkit-scrollbar": {
                        display: "block",
                        width: "0.4em",
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: "#e7ebf0",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "#66acdb",
                        borderRadius: "3px",
                        height: "5px",

                      },
                    },
                  },
                }}
                {...selectProps}
                defaultValue={defaultValue}
                disableUnderline={disableUnderline}
                
              >
                { options.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <>
              <div style={{  width: "70px" }}>
                {edit && (
                   <TextField
                   value={newOption}
                   onChange={handleText}
                   placeholder="New Option"
                   variant="standard"
                   autoFocus
                   sx={{ width: "70px" }}
                 />
                
                )}
                </div>
              </>
            )}
          </div>
          {!isAddingOption ? (
            <Button
              variant="text"
              sx={{ borderRadius: "5px", px: "5px" }}
              onClick={addButton}
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
            </Button>
          ) : (
            <>
              {edit ? (
                <Button
                  variant="text"
                  sx={{ borderRadius: "5px", px: "5px" }}
                  onClick={saveButton}
                >
                  <IconHolder
                    icon="right"
                    sx={{
                      "& .tab-iconBox": {
                        height: "24px",
                        width: "auto !important",
                      },
                    }}
                  />
                </Button>
              ) : (
                <Button
                  variant="text"
                  sx={{ borderRadius: "5px", px: "5px" }}
                  onClick={addButton}
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
                </Button>
              )}
            </>
          )}
        </Grid>
      </FormControl>
    </div>
  );
}

export default CustomDropdown;
