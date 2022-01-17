import React, { useEffect } from "react"
import "../styles/style.scss"
import Announcement from "../../Home/components/Announcement"
import NavBar from "../../Home/components/NavBar"
import Menu from "../../Home/components/Menu"
import Footer from "../../Home/components/Footer"
import { popularProducts } from "../../../services/fakeData"
import ProductDetail from "../../../components/ProductDetail/views/ProductDetail"

const Collections = () => {
  useEffect(() => {
    document.title = "All Collections"
  })
  return (
    <div className="collections">
      <Announcement />
      <div className="menu-bar">
        <NavBar />
        <Menu />
      </div>
      <h1>All Collections</h1>
      <div className="filter-container">
        <div className="filter">
          <span>Filter Product:</span>
          <select>
            <option value="" disabled selected>
              Color
            </option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
          </select>
          <select>
            <option value="" disabled selected>
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="filter">
          <span>Sort Product:</span>
          <select>
            <option value="" selected>
              Newest
            </option>
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>
          </select>
        </div>
      </div>
      <div className="collections-container">
        {popularProducts.map((i: any) => (
          <ProductDetail img={i.img} id={i.id} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Collections
