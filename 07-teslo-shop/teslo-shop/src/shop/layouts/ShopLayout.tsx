import { Outlet } from "react-router"
import { CustomHeader } from "../components/CustomHeader"
import { CustomFooter } from "../components/CustomFooter"

//El outlet es para mostrar a los hijos

export const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomHeader/>
      <Outlet/>

      <CustomFooter/>
      
      </div>
  )
}
