

import React, { useCallback, useContext, useEffect, useState } from "react";
import PaperBase from "../../../../layout/PaperBase";
import TableAction from "../../../../layout/TableAction";
import {
  Button,
  Checkbox,
  Grid,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import TableList from "../../../../components/Table";
import DropdownMenuNew from "../../../../components/DropDownMenu";
import CustomDropdown from "../../../../components/DropDown";
import EditableText from "../../../../components/EditableText";
import { ServiceContextProv } from "../../../../context/ServiceContext";
import ServiceEdit from "../../../../components/ServiceEdit";
import IconHolder from "../../../../components/IconButton";

const Gold = () => {
  const contextData = useContext(ServiceContextProv);
  const { goldData,setGoldData, isAllCheck } = contextData;

  console.log("goldData", goldData);


  const [newOption, setNewOption] = useState("");
  const [isAddingOption, setIsAddingOption] = useState(false);
  const [selected, setSelected] = useState([]);



  const [isSelected, setIsSelected] = useState(false);
  const [retailLongSelected, setRetailLongSelected] = useState(false);
  const [corporateShortSelected, setCorporateShortSelected] = useState(false);
  const [corporateLongSelected, setCorporateLongSelected] = useState(false);

  const [masterCheckBox, setMasterCheckBox] = useState(false);
  const [retailLongCheckBox, setRetailLongCheckBox] = useState(false);
  const [corporateShortBox, setCorporateShortBox] = useState(false);
  const [corporateLongBox, setCorporateLongBox] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [isServiceEdit, setIsServiceEdit] = useState(false);
  // const [text, setText] = useState("0");
  

  const Type = [
    { id: "0", value: "Dollar" },
    { id: "1", value: "Percentage" },
  ];


  const handleDoubleServiceClick = useCallback(() => {
    setIsServiceEdit(true);
  }, [isServiceEdit]);

  const handleDoubleClick = useCallback((id) => {
    setIsEditing(true);

  }, [isEditing]);

  const handleSaveServie = useCallback((index) => (e) => {
    
    const updatedData = [...goldData];
    setGoldData(updatedData);
    setIsServiceEdit(false);
    
  }, [isServiceEdit, goldData]);

  const handleSave = useCallback((index) => (e) => {
    
    const updatedData = [...goldData];
    // Update the data in updatedData[index] as needed
    setGoldData(updatedData);
    setIsEditing(false);
    
  }, [isEditing, goldData]);

  const handleServiceEditChange = useCallback((index)=>
  (e) => {

    const updatedData = [...goldData];
    updatedData[index].service = e.target.value;
    setGoldData(updatedData);
  
  },
  [goldData]
);

  const handleEditChange = useCallback((index)=>
    (e) => {

      const updatedData = [...goldData];
      updatedData[index].rate = e.target.value;
      setGoldData(updatedData);
    
    },
    [goldData]
  );

  const handleChangeService = useCallback(
    (index) => (event) => {
      const updatedObjects = [...goldData];
      updatedObjects[index].frequency = event?.target?.value;
      setGoldData(updatedObjects);
    },
    [goldData]
  );

  const handleChangeType = useCallback(
    (index) => (event) => {
      const updatedObjects = [...goldData];
      updatedObjects[index].charging_type = event?.target?.value;
      setGoldData(updatedObjects);
    },
    [goldData]
  );

  const handleEnter = useCallback(
    (index) => (event) => {
      const updatedObjects = [...goldData];
      const updatedObject = { ...updatedObjects[index] };

      if (!Array.isArray(updatedObject.frequency_type)) {
        updatedObject.frequency_type = [];
      }
      updatedObject.frequency_type.push(newOption);
      updatedObjects[index].frequency = event.target.value;

      updatedObjects[index] = updatedObject;

      setGoldData(updatedObjects);

      setIsAddingOption(false);
    },
    [isAddingOption, goldData]
  );

  const handleAddChange = useCallback(
    (index) => (event) => {
      const updatedObjects = [...goldData];
      updatedObjects[index].frequency = "";
      updatedObjects[index].edit = true;
      setGoldData(updatedObjects);

      setIsAddingOption(!isAddingOption);
    },
    [goldData, isAddingOption]
  );

  const handleTextchange = useCallback(
    (index) => (e) => {
      const updatedData = [...goldData];
      const updatedNewOption = e?.target?.value;
      updatedData[index].frequency = updatedNewOption
      setGoldData(updatedData);
      setNewOption(e?.target?.value);
    },
    [goldData, newOption]
  );

  const handleCheckClick = useCallback(
    (name, index) => (e) => {
      const updatedData = [...goldData];
      if (name === "retails_short") {
        updatedData[index].retails_short = e.target.checked || isAllCheck ;
      } else if (name === "retails_long") {
        updatedData[index].retails_long = e.target.checked;
      } else if (name === "corporate_short") {
        updatedData[index].corporate_short = e.target.checked;
      } else {
        updatedData[index].corporate_long = e.target.checked;
      }
      setGoldData(updatedData);
    },
    [goldData]
  );

  const handleSelectAllClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = goldData.map((checkbox) => ({
        ...checkbox,
        retails_short: !isSelected ,
      }));

      setGoldData(updatedCheckboxes);
      setMasterCheckBox(checked);

      setIsSelected(!isSelected);
   
    },
    [masterCheckBox, goldData, isSelected, ]
  );

  const handleRetailLongClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = goldData.map((checkbox) => ({
        ...checkbox,
        retails_long: !retailLongSelected,
      }));

      setGoldData(updatedCheckboxes);
      setRetailLongCheckBox(checked);
      setRetailLongSelected(!retailLongSelected);
   
    },
    [retailLongCheckBox, goldData, retailLongSelected, ]
  );

  const handleCorporateShortClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = goldData.map((checkbox) => ({
        ...checkbox,
        corporate_short: !corporateShortSelected,
      }));

      setGoldData(updatedCheckboxes);
      setCorporateShortBox(checked);
      setCorporateShortSelected(!corporateShortSelected);
   
    },
    [corporateShortBox, goldData, corporateShortSelected]
  );


  const handleCorporateLongClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = goldData.map((checkbox) => ({
        ...checkbox,
        corporate_long: !corporateLongSelected,
      }));

      setGoldData(updatedCheckboxes);
      setCorporateLongBox(checked);
      setCorporateLongSelected(!corporateLongSelected);
     
    },
    [corporateLongBox, goldData, corporateLongSelected, ]
  );

  const handleAllCheckBox = () => {
    handleSelectAllClick();
    handleRetailLongClick();
    handleCorporateShortClick();
    handleCorporateLongClick();

  }

  const handleDelete = useCallback((id) => {

    setGoldData((prevBronzeData) => {
      const updatedBronzeData = prevBronzeData.filter((item) => item.bronzeId !== id);
      return updatedBronzeData;
    });
      

  },[goldData])




  const tableHeaders = [
    { label: "Services", allowedUser: true, checked: false },
    { label: "Frequency", allowedUser: true, checked: false },
    { label: "Charging Type", allowedUser: true, checked: false },
    { label: "Rate($)", allowedUser: true, checked: false },
    { label: "Retails Short Stay", allowedUser: true, checked: true },
    { label: "Retails Long Stay", allowedUser: true, checked: true },
    { label: "Corporate Long Stay", allowedUser: true, checked: true },
    { label: "Corporate Long stay", allowedUser: true, checked: true },
    {label: "", allowedUser: true, checked: false}
  ];

  const tableBodyContent = useCallback(() => {
    return (
      <>
        {goldData &&
          goldData.map((item, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;
            const label = `Value : ${index}`;

            return (
              <>
                <TableRow>
                  <TableCell>
                    <ServiceEdit
                    isEditing={isServiceEdit}
                    value={item.service}
                    onDoubleClick={handleDoubleServiceClick}
                    onChange={handleServiceEditChange(index)}
                    onClick={handleSaveServie(index)}
                  
                    />
                  </TableCell>

                  <TableCell>
                    <CustomDropdown
                      value={item.frequency}
                      onChange={handleChangeService(index)}
                      options={item?.frequency_type}
                      addButton={handleAddChange(index)}
                      saveButton={handleEnter(index)}
                      newOption={newOption}
                      handleText={handleTextchange(index)}
                      isAddingOption={isAddingOption}
                      disableUnderline={true}
                      edit={item.edit}
                    />
                  </TableCell>

                  <TableCell>
                    <DropdownMenuNew
                      disableUnderline={true}
                      value={item.charging_type}
                      menuItem={Type.map((options) => {
                        return { id: options.id, label: options.value };
                      })}
                      onChange={handleChangeType(index)}
                    />
                  </TableCell>
                  <TableCell>
                    <EditableText 
                     isEditing={isEditing}
                     value={item.rate}
                     onChange={handleEditChange(index)}
                     onDoubleClick={handleDoubleClick}
                     onClick={ handleSave(index)}
                      />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      color="primary"
                      inputProps={{
                        "aria-labelledby": labelId,
                        "aria-label": label,
                      }}
                      checked={item.retails_short}
                      onClick={handleCheckClick("retails_short", index)}
                      // checked={selected.includes(item.bronzeId)}
                      // onClick={handleClick(item.bronzeId)}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      color="primary"
                      inputProps={{
                        "aria-labelledby": labelId,
                        "aria-label": label,
                      }}
                      // aria-label={'Value : ' + index}
                      checked={item.retails_long}
                      onClick={handleCheckClick("retails_long", index)}
                      // checked={selected.includes(item.bronzeId)}
                      // onClick={handleClick(item.bronzeId)}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      color="primary"
                      inputProps={{
                        "aria-labelledby": labelId,
                        "aria-label": label,
                      }}
                      checked={item.corporate_short}
                      onClick={handleCheckClick("corporate_short", index)}
                      // checked={selected.includes(item.bronzeId)}
                      // // onClick={handleClick(item.bronzeId)}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      color="primary"
                      inputProps={{
                        "aria-labelledby": labelId,
                        "aria-label": label,
                      }}
                      checked={item.corporate_long}
                      onClick={handleCheckClick("corporate_long", index)}
                      // checked={selected.includes(item.bronzeId)}
                      // onClick={handleClick(item.bronzeId)}
                    />
                  </TableCell>
                  <TableCell>
                    {
                      goldData.length !== 1 && (
                        <Button
                        variant="text"
                        sx={{ borderRadius: "5px", px: "5px" }}
                        onClick={()=>handleDelete(item.bronzeId)}
                      >
                        <IconHolder
                          icon="delete"
                          sx={{
                            "& .tab-iconBox": {
                              height: "24px",
                              width: "auto !important",
                            },
                          }}
                        />
                      </Button>
                      )
                    }
               
                  </TableCell>
                </TableRow>
              </>
            );
          })}
      </>
    );
  }, [
    goldData,
    newOption,
    isAddingOption,


    isEditing,
    isServiceEdit

    ,
  ]);

  return (
    <>
      <PaperBase allowScroll contentType="fixedPage">
        <TableAction>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row", sm: "row" },
            }}
            xs={12}
          ></Grid>
        </TableAction>
        <TableList
          allowAction
          isRetailShort={masterCheckBox}
          isRetailLong={retailLongCheckBox}
          isCorporateShort={corporateShortBox}
          isCorporateLong={corporateLongBox}
          numSelected={selected.length}
          rowCount={goldData?.length}
          TableBodyContent={tableBodyContent}
          tableHeaders={tableHeaders}
          onRetailShortClick={handleSelectAllClick}
          onRetailLongClick={handleRetailLongClick}
          onCorporateShortClick={handleCorporateShortClick}
          onCorporateLongClick={handleCorporateLongClick}
          onAllCheckClick={handleAllCheckBox}
        />
      </PaperBase>
    </>
  );
};

export default Gold;
