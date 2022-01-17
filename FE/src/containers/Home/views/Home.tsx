import { useEffect } from "react"
import "../styles/home.scss"
import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import Banner from "../components/Banner"
import Menu from "../components/Menu"
import Categories from "../components/Categories"
import NewProduct from "../../Product/views/NewProduct"
import Footer from "../components/Footer"

const Home = () => {
  useEffect(() => {
    document.title = "ASN Store"
  }, [])
  return (
    <div className="main-home">
      <Announcement />
      <div className="menu-bar">
        <NavBar />
        <Menu />
      </div>
      <Banner />
      <Categories />
      <NewProduct />
      <Footer />
    </div>
  )
}

export default Home
