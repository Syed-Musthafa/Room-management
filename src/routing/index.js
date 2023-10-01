import { Route, Routes } from "react-router-dom"

import RoomManagement from "../modules/RoomManagement/RoomManagement"


const AppRoutes = () => {

  return (
 
    <Routes>
      <Route element={<RoomManagement />} path="/" /> 
    </Routes>

  )
}

export default AppRoutes