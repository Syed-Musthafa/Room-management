import { Route, Routes } from "react-router-dom"

import RoomManagement from "../modules/RoomManagement/RoomManagement"
import RoomContext from "../context/RoomContext"


const AppRoutes = () => {

  return (
 
    <RoomContext>
    <Routes>
     
      <Route element={<RoomManagement />} path="/" /> 
   
    </Routes>
    </RoomContext>

  )
}

export default AppRoutes