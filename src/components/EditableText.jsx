import { Button, TextField, Typography } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ServiceContextProv } from "../context/ServiceContext";
import IconHolder from "./IconButton";

function EditableText({ isEditing, value, onChange, onDoubleClick, onClick }) {


  return (
    <div style={{ display: "flex" }} onDoubleClick={onDoubleClick}>
      {isEditing ? (
        <TextField
          value={value}
          onChange={onChange}
          variant="standard"
          autoFocus
          sx={{  width: "100px"}}
        />
      ) : (
        <Typography sx={{ width: "100px" }}>{value}</Typography>
      )}
      {isEditing && (
        <Button
          variant="text"
          sx={{ borderRadius: "5px", px: "5px" }}
          onClick={onClick}
        >
          <IconHolder
            icon=  "right"
            sx={{
              "& .tab-iconBox": {
                height: "24px",
                width: "auto !important",
              },
            }}
          />
        </Button>
      )}
    </div>
  );
}

export default EditableText;
