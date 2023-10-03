import React from "react"



export const RoomContextProv = React.createContext({})

const RoomContext = (props) => {

    const [value, setValue] = React.useState(0);



    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    return (
        <RoomContextProv.Provider
        value={{

            value : value,
            handleChange : handleChange


        }}>
            {props.children}
        </RoomContextProv.Provider>
    )

}

export default RoomContext