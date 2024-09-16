import { Outlet } from "react-router-dom"
import Navbarr from "../Common/Navbarr"
import Footer from "../Common/Footer"

const Layout = () => {
  return (
   <>
   <Navbarr/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
