import { useNavigate } from "react-router-dom"
const PrivatRoutes=({childern})=>{
      const naviaget=useNavigate()
      let token=localStorage.getItem(("token"))
    if(!token){
      return naviaget("/")
    }else{
      return(childern)
    }
}
export default PrivatRoutes