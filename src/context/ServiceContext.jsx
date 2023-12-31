import React, { useCallback, useState } from "react";
import { Services } from "../layout/DummyData";

import { v4 as uuidv4 } from 'uuid';



export const ServiceContextProv = React.createContext({})

const initialState = {
    bronzeId : "2",
    service : "Enter Value",
    frequency_type: [],
    frequency : '',
    charging_type : "",
    rate: 0,
    retails_short : false,
    retails_long : false,
    corporate_short : false,
    corporate_long : false,
    edit : false
  
    
  }



const  ServiceContext = (props) => {

    const [serviceData, setServiceData] = useState(Services);
    const [bronzeData, setBronzeData] = useState([]);
    const [silverData, setSilverData] = useState([]);
    const [goldData, setGoldData] = useState([]);
    const [platinumData, setPlatinumData] = useState([]);
    const [ bronzeList, setBronzeList ] = useState(initialState)

    const [isAllCheck, setIsAllCheck] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
 

    
  const [userLabel, setUserLabel] = useState("Bronze");
  const [selected, setSelected] = useState([]);
  const [list, setList] = useState(0);

  const handleChangeTabs = useCallback((event, newValue) => {
    setList(newValue);
    setSelected([]);
  }, []);

  const handleClickTabs = useCallback(
    (name) => () => {
      setUserLabel(name);
      setSelected([]);
    },
    [userLabel]
  );
// 

   

// Generate a unique ID 
const uniqueID = uuidv4();
    const handleAdd = useCallback(() => {

      if(userLabel === "Bronze") {
        setBronzeData([...bronzeData, {
          bronzeId : uniqueID,
          service : "Enter Value",
          frequency_type: ["Daily", "Weekly"],
          frequency : "Daily",
          charging_type : "0",
          rate:'0',
          retails_short : false,
          retails_long : false,
          corporate_short : false,
          corporate_long : false,
          edit : false,
          serviceEdit : false,
          rateEdit: false
       }  ])

      } else if(userLabel === "Silver"){
        setSilverData([...silverData, {
          bronzeId : uniqueID,
          service : "Enter Value",
          frequency_type: ["Daily", "Weekly"],
          frequency : "Daily",
          charging_type : "0",
          rate:'0',
          retails_short : false,
          retails_long : false,
          corporate_short : false,
          corporate_long : false,
          edit : false,
          serviceEdit : false,
          rateEdit: false
       }  ])

      } else if(userLabel === "Gold"){
        setGoldData([...goldData, {
          bronzeId : uniqueID,
          service : "Enter Value",
          frequency_type: ["Daily", "Weekly"],
          frequency : "Daily",
          charging_type : "0",
          rate:'0',
          retails_short : false,
          retails_long : false,
          corporate_short : false,
          corporate_long : false,
          edit : false,
          serviceEdit : false,
          rateEdit: false
       }  ])
      }else {
       setPlatinumData([...platinumData, {
          bronzeId : uniqueID,
          service : "Enter Value",
          frequency_type: ["Daily", "Weekly"],
          frequency : "Daily",
          charging_type : "0",
          rate:'0',
          retails_short : false,
          retails_long : false,
          corporate_short : false,
          corporate_long : false,
          edit : false,
          serviceEdit : false,
          rateEdit: false
       }  ])

      }

    
       
      },[bronzeData, silverData, goldData, platinumData, userLabel])


      const handleAllCheck = useCallback(() => {
         if( userLabel === "Bronze"){
          const updatedCheckboxes = bronzeData.map((checkbox) => ({
            ...checkbox,
            retails_short: !isChecked ,
            retails_long : !isChecked,
            corporate_short : !isChecked,
            corporate_long : !isChecked
          }));
    
          setBronzeData(updatedCheckboxes);
          setIsAllCheck(!isAllCheck) 
          setIsChecked(!isChecked)
         } else if(userLabel === "Silver" ){
          const updatedCheckboxes = silverData.map((checkbox) => ({
            ...checkbox,
            retails_short: !isChecked ,
            retails_long : !isChecked,
            corporate_short : !isChecked,
            corporate_long : !isChecked
          }));
    
          setSilverData(updatedCheckboxes);
          setIsAllCheck(!isAllCheck) 
          setIsChecked(!isChecked)

         }else if(userLabel === "Gold" ){
          const updatedCheckboxes = goldData.map((checkbox) => ({
            ...checkbox,
            retails_short: !isChecked ,
            retails_long : !isChecked,
            corporate_short : !isChecked,
            corporate_long : !isChecked
          }));
    
          setGoldData(updatedCheckboxes);
          setIsAllCheck(!isAllCheck) 
          setIsChecked(!isChecked)
         }else {
          const updatedCheckboxes = platinumData.map((checkbox) => ({
            ...checkbox,
            retails_short: !isChecked ,
            retails_long : !isChecked,
            corporate_short : !isChecked,
            corporate_long : !isChecked
          }));
    
          setPlatinumData(updatedCheckboxes);
          setIsAllCheck(!isAllCheck) 
          setIsChecked(!isChecked)
         }
      },[isAllCheck, userLabel,bronzeData, silverData, goldData, platinumData, isChecked ])


    return (
        <ServiceContextProv.Provider
         value={{
            userLabel: userLabel,
            list : list,
            serviceData : serviceData,
            bronzeData : bronzeData,
            silverData : silverData,
            goldData : goldData,
            platinumData: platinumData,

            setServiceData,
            setBronzeData,
            setSilverData,
            setGoldData,
            setPlatinumData,
          
            bronzeList : bronzeList,
            setBronzeList,
            handleAdd : handleAdd,
            handleAllCheck : handleAllCheck,
            isAllCheck : isAllCheck,
            isChecked : isChecked,
          

            handleChangeTabs : handleChangeTabs,
            handleClickTabs : handleClickTabs

         }}
        >
            {props.children}
        </ServiceContextProv.Provider>
    )

}


export default  ServiceContext