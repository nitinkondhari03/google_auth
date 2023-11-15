import {Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import PrivatRoutes from "./PrivetRoutes"
import Register from "./components/Register"
const AllRoutes=()=>{
      return(
            <>
            <Routes>
             <Route path="/" element={<Login/>}/> 
             <Route path="/register" element={<Register/>}/>    
            </Routes>
            </>
      )
}
export default AllRoutes