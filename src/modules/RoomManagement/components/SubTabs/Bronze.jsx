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
import { Services } from "../../../../layout/DummyData";
import DropdownMenuNew from "../../../../components/DropDownMenu";
import CustomDropdown from "../../../../components/DropDown";
import EditableText from "../../../../components/EditableText";
import { ServiceContextProv } from "../../../../context/ServiceContext";
import ServiceEdit from "../../../../components/ServiceEdit";
import IconHolder from "../../../../components/IconButton";

const Bronze = () => {
  const contextData = useContext(ServiceContextProv);
  const { bronzeData , setBronzeData, isAllCheck } = contextData;

  console.log("bronzeData", bronzeData);


  const [newOption, setNewOption] = useState("");
  const [isAddingOption, setIsAddingOption] = useState(false);
  const [selected, setSelected] = useState([]);

  const [allCheckName, setAllCheckName] = useState("");

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
  const [enabledIndex, setEnabledIndex] = useState(0);
  

  const Type = [
    { id: "0", value: "Dollar" },
    { id: "1", value: "Percentage" },
  ];


  const handleDoubleServiceClick = useCallback((index) => {

    const updatedData = [...bronzeData];
    updatedData[index].serviceEdit = true
    setBronzeData(updatedData);
    
    setIsServiceEdit(true);
  }, [isServiceEdit, bronzeData ]);

  const handleDoubleClick = useCallback((id) => {
    setIsEditing(true);

  }, [isEditing]);

  const handleSaveService = useCallback((index) => (e) => {
    
    const updatedData = [...bronzeData];
    setBronzeData(updatedData);
    setIsServiceEdit(false);
    
  }, [isServiceEdit, bronzeData]);

  const handleSave = useCallback((index) => (e) => {
    
    const updatedData = [...bronzeData];
    // Update the data in updatedData[index] as needed
    setBronzeData(updatedData);
    setIsEditing(false);
    
  }, [isEditing, bronzeData]);

  const handleServiceEditChange = useCallback((index)=>
  (e) => {

    console.log("index", index);
    console.log("chneged", e);

    const updatedData = [...bronzeData];
    updatedData[index].service = e.target.value;
    setBronzeData(updatedData);
  
  },
  [bronzeData]
);

const enableTextField = useCallback((index) => {
  setEnabledIndex(index);
},[enabledIndex])


  const handleEditChange = useCallback((index)=>
    (e) => {

      const updatedData = [...bronzeData];
      updatedData[index].rate = e.target.value;
      setBronzeData(updatedData);
    
    },
    [bronzeData]
  );

  const handleChangeService = useCallback(
    (index) => (event) => {
      const updatedObjects = [...bronzeData];
      updatedObjects[index].frequency = event?.target?.value;
      setBronzeData(updatedObjects);
    },
    [bronzeData]
  );

  const handleChangeType = useCallback(
    (index) => (event) => {
      const updatedObjects = [...bronzeData];
      updatedObjects[index].charging_type = event?.target?.value;
      setBronzeData(updatedObjects);
    },
    [bronzeData]
  );

  const handleEnter = useCallback(
    (index) => (event) => {
      const updatedObjects = [...bronzeData];
      const updatedObject = { ...updatedObjects[index] };

      if (!Array.isArray(updatedObject.frequency_type)) {
        updatedObject.frequency_type = [];
      }
      updatedObject.frequency_type.push(newOption);
      updatedObjects[index].frequency = event.target.value;

      updatedObjects[index] = updatedObject;

      setBronzeData(updatedObjects);

      setIsAddingOption(false);
    },
    [isAddingOption, bronzeData]
  );

  const handleAddChange = useCallback(
    (index) => (event) => {
      const updatedObjects = [...bronzeData];
      updatedObjects[index].frequency = "";
      updatedObjects[index].edit = true;
      setBronzeData(updatedObjects);

      setIsAddingOption(!isAddingOption);
    },
    [bronzeData, isAddingOption]
  );

  const handleTextChange = useCallback(
    (index) => (e) => {
      const updatedData = [...bronzeData];
      const updatedNewOption = e?.target?.value;
      updatedData[index].frequency = updatedNewOption
      setBronzeData(updatedData);
      setNewOption(e?.target?.value);
    },
    [bronzeData, newOption]
  );

  const handleCheckClick = useCallback(
    (name, index) => (e) => {
      const updatedData = [...bronzeData];
      if (name === "retails_short") {
        updatedData[index].retails_short = e.target.checked || isAllCheck ;
      } else if (name === "retails_long") {
        updatedData[index].retails_long = e.target.checked;
      } else if (name === "corporate_short") {
        updatedData[index].corporate_short = e.target.checked;
      } else {
        updatedData[index].corporate_long = e.target.checked;
      }
      setBronzeData(updatedData);
    },
    [bronzeData]
  );

  const handleSelectAllClick = useCallback(
    (event) => {
      const { checked } = event.target;

      console.log("worked");

      const updatedCheckboxes = bronzeData.map((checkbox) => ({
        ...checkbox,
        retails_short: true ,
        retails_long : true,
        corporate_short : true,
        corporate_long : true
      }));

      setBronzeData(updatedCheckboxes);
      // setMasterCheckBox(checked);

      // setIsSelected(!isSelected);
   
    },
    [masterCheckBox, bronzeData, isSelected, ]
  );

  const handleRetailShortClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = bronzeData.map((checkbox) => ({
        ...checkbox,
        retails_short: !isSelected ,
      }));

      setBronzeData(updatedCheckboxes);
      setMasterCheckBox(checked);

      setIsSelected(!isSelected);
   
    },
    [masterCheckBox, bronzeData, isSelected, ]
  );

  const handleRetailLongClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = bronzeData.map((checkbox) => ({
        ...checkbox,
        retails_long: !retailLongSelected,
      }));

      setBronzeData(updatedCheckboxes);
      setRetailLongCheckBox(checked);
      setRetailLongSelected(!retailLongSelected);
   
    },
    [retailLongCheckBox, bronzeData, retailLongSelected, ]
  );

  const handleCorporateShortClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = bronzeData.map((checkbox) => ({
        ...checkbox,
        corporate_short: !corporateShortSelected,
      }));

      setBronzeData(updatedCheckboxes);
      setCorporateShortBox(checked);
      setCorporateShortSelected(!corporateShortSelected);
   
    },
    [corporateShortBox, bronzeData, corporateShortSelected]
  );


  const handleCorporateLongClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = bronzeData.map((checkbox) => ({
        ...checkbox,
        corporate_long: !corporateLongSelected,
      }));

      setBronzeData(updatedCheckboxes);
      setCorporateLongBox(checked);
      setCorporateLongSelected(!corporateLongSelected);
     
    },
    [corporateLongBox, bronzeData, corporateLongSelected, ]
  );

  // const handleAllCheckBox = () => {
  //   handleSelectAllClick();
  //   handleRetailLongClick();
  //   handleCorporateShortClick();
  //   handleCorporateLongClick();

  // }

  const handleDelete = useCallback((id) => {

    setBronzeData((prevBronzeData) => {
      const updatedBronzeData = prevBronzeData.filter((item) => item.bronzeId !== id);
      return updatedBronzeData;
    });
      

  },[bronzeData])




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
        {bronzeData &&
          bronzeData.map((item, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;
            const label = `Value : ${index}`;

            return (
              <>
                <TableRow>
                  <TableCell>
                    <ServiceEdit
                    isEditing={isServiceEdit}
                    value={item.service}
                    onDoubleClick={() => handleDoubleServiceClick(index)}
                    onChange={handleServiceEditChange(index)}
                    onClick={handleSaveService(index)}
                    disabled={index !== enabledIndex}
                    onFocus={enableTextField(index)}
                  
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
                      handleText={handleTextChange(index)}
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
                      bronzeData.length !== 1 && (
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
    bronzeData,
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
          allCheckName={allCheckName}
          isRetailShort={masterCheckBox}
          isRetailLong={retailLongCheckBox}
          isCorporateShort={corporateShortBox}
          isCorporateLong={corporateLongBox}
        
          TableBodyContent={tableBodyContent}
          tableHeaders={tableHeaders}
          // omSelectAllCheck={handleSelectAllClick}
          onRetailShortClick={handleRetailShortClick}
          onRetailLongClick={handleRetailLongClick}
          onCorporateShortClick={handleCorporateShortClick}
          onCorporateLongClick={handleCorporateLongClick}
          onAllCheckClick={handleSelectAllClick}
        />
      </PaperBase>
    </>
  );
};

export default Bronze;
