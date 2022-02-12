import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import "../styles/style.scss"
import Announcement from "../../../containers/Home/components/Announcement"
import NavBar from "../../../containers/Home/components/NavBar"
import Menu from "../../../containers/Home/components/Menu"
import { Add, Remove } from "@mui/icons-material"
import Footer from "../../../containers/Home/components/Footer"
import useProducts from "../hook/useProducts"

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props: any) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const Product = () => {
  const { id } = useParams<any>()
  const [amount, setAmount] = useState<number>(1)
  const { productDetail, getProductDetail } = useProducts()
  useEffect(() => {
    getProductDetail(id)
  }, [])
  return (
    <div className="product">
      <Announcement />
      <div className="menu-bar">
        <NavBar />
        <Menu />
      </div>
      <div className="wrapper">
        <div className="img-container">
          <img src={productDetail?.productImgURL} alt="" />
        </div>
        <div className="info-container">
          <h1 className="title">{productDetail?.productName}</h1>
          <p className="description">
            {productDetail?.productDescription}
          </p>
          <span className="price">VND: {productDetail?.productPrice}</span>
          <div className="filter-container">
            <div className="filter">
              <span className="filter-title">Color</span>
              <Color color="red" />
              <Color color="black" />
              <Color color="gray" />
            </div>
            <div className="filter">
              <span className="filter-title">Size</span>
              <select name="" id="" className="filter-size">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </div>
          <div className="good-count">
            <div className="amount-container">
              <Remove
                className="icon-button"
                onClick={() => setAmount(amount - 1)}
              />
              <span className="amount">{amount}</span>
              <Add
                className="icon-button"
                onClick={() => setAmount(amount + 1)}
              />
            </div>
            <button className="buy-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
