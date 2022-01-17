import React from "react"
import "../styles/style.scss"
import { Grid } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";


interface ProductProps {
  id?: number
  img?: string
  name?: string
  cost?: string
}

const ProductDetail = ({ id, img, name, cost }: ProductProps) => {
  const navigate = useNavigate()
  const open = () => {
    navigate(`/product/${id}`)
  }
  return (
    <div className="product-detail">
      <div className="circle" />
      <img src={img} alt="" />
      <div className="info">
        <div className="icon">
          <SearchIcon onClick={open}/>
        </div>
        <div className="icon">
          <ShoppingCartIcon />
        </div>
        <div className="icon">
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
