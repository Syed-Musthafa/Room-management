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

const Silver = () => {
  const contextData = useContext(ServiceContextProv);
  const { silverData,setSilverData,  isAllCheck } = contextData;



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
    
    const updatedData = [...silverData];
    setSilverData(updatedData);
    setIsServiceEdit(false);
    
  }, [isServiceEdit, silverData]);

  const handleSave = useCallback((index) => (e) => {
    
    const updatedData = [...silverData];
    setSilverData(updatedData);
    setIsEditing(false);
    
  }, [isEditing, silverData]);

  const handleServiceEditChange = useCallback((index)=>
  (e) => {

    const updatedData = [...silverData];
    updatedData[index].service = e.target.value;
    setSilverData(updatedData);
  
  },
  [silverData]
);

  const handleEditChange = useCallback((index)=>
    (e) => {

      const updatedData = [...silverData];
      updatedData[index].rate = e.target.value;
      setSilverData(updatedData);
    
    },
    [silverData]
  );

  const handleChangeService = useCallback(
    (index) => (event) => {
      const updatedObjects = [...silverData];
      updatedObjects[index].frequency = event?.target?.value;
      setSilverData(updatedObjects);
    },
    [silverData]
  );

  const handleChangeType = useCallback(
    (index) => (event) => {
      const updatedObjects = [...silverData];
      updatedObjects[index].charging_type = event?.target?.value;
      setSilverData(updatedObjects);
    },
    [silverData]
  );

  const handleEnter = useCallback(
    (index) => (event) => {
      const updatedObjects = [...silverData];
      const updatedObject = { ...updatedObjects[index] };

      if (!Array.isArray(updatedObject.frequency_type)) {
        updatedObject.frequency_type = [];
      }
      updatedObject.frequency_type.push(newOption);
      updatedObjects[index].frequency = event.target.value;

      updatedObjects[index] = updatedObject;

      setSilverData(updatedObjects);

      setIsAddingOption(false);
    },
    [isAddingOption, silverData]
  );

  const handleAddChange = useCallback(
    (index) => (event) => {
      const updatedObjects = [...silverData];
      updatedObjects[index].frequency = "";
      updatedObjects[index].edit = true;
      setSilverData(updatedObjects);

      setIsAddingOption(!isAddingOption);
    },
    [silverData, isAddingOption]
  );

  const handleTextchange = useCallback(
    (index) => (e) => {
      const updatedData = [...silverData];
      const updatedNewOption = e?.target?.value;
      updatedData[index].frequency = updatedNewOption
      setSilverData(updatedData);
      setNewOption(e?.target?.value);
    },
    [silverData, newOption]
  );

  const handleCheckClick = useCallback(
    (name, index) => (e) => {
      const updatedData = [...silverData];
      if (name === "retails_short") {
        updatedData[index].retails_short = e.target.checked || isAllCheck ;
      } else if (name === "retails_long") {
        updatedData[index].retails_long = e.target.checked;
      } else if (name === "corporate_short") {
        updatedData[index].corporate_short = e.target.checked;
      } else {
        updatedData[index].corporate_long = e.target.checked;
      }
      setSilverData(updatedData);
    },
    [silverData]
  );

  const handleSelectAllClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = silverData.map((checkbox) => ({
        ...checkbox,
        retails_short: !isSelected ,
      }));

      setSilverData(updatedCheckboxes);
      setMasterCheckBox(checked);

      setIsSelected(!isSelected);
   
    },
    [masterCheckBox, silverData, isSelected, ]
  );

  const handleRetailLongClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = silverData.map((checkbox) => ({
        ...checkbox,
        retails_long: !retailLongSelected,
      }));

      setSilverData(updatedCheckboxes);
      setRetailLongCheckBox(checked);
      setRetailLongSelected(!retailLongSelected);
   
    },
    [retailLongCheckBox, silverData, retailLongSelected, ]
  );

  const handleCorporateShortClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = silverData.map((checkbox) => ({
        ...checkbox,
        corporate_short: !corporateShortSelected,
      }));

      setSilverData(updatedCheckboxes);
      setCorporateShortBox(checked);
      setCorporateShortSelected(!corporateShortSelected);
   
    },
    [corporateShortBox, silverData, corporateShortSelected]
  );


  const handleCorporateLongClick = useCallback(
    (event) => {
      const { checked } = event.target;

      const updatedCheckboxes = silverData.map((checkbox) => ({
        ...checkbox,
        corporate_long: !corporateLongSelected,
      }));

      setSilverData(updatedCheckboxes);
      setCorporateLongBox(checked);
      setCorporateLongSelected(!corporateLongSelected);
     
    },
    [corporateLongBox, silverData, corporateLongSelected, ]
  );

  const handleAllCheckBox = () => {
    handleSelectAllClick();
    handleRetailLongClick();
    handleCorporateShortClick();
    handleCorporateLongClick();

  }

  const handleDelete = useCallback((id) => {

    setSilverData((prevBronzeData) => {
      const updatedBronzeData = prevBronzeData.filter((item) => item.bronzeId !== id);
      return updatedBronzeData;
    });
      

  },[silverData])




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
        {silverData &&
          silverData.map((item, index) => {
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
                     
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      color="primary"
                      inputProps={{
                        "aria-labelledby": labelId,
                        "aria-label": label,
                      }}
                      
                      checked={item.retails_long}
                      onClick={handleCheckClick("retails_long", index)}
                     
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
                   
                    />
                  </TableCell>
                  <TableCell>
                    {
                      silverData.length !== 1 && (
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
    silverData,
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
          rowCount={silverData?.length}
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

export default Silver;
