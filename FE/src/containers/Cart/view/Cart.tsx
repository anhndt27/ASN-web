import React from "react"
import "../styles/cart.scss"
import styled from "styled-components"
import Announcement from "../../Home/components/Announcement"
import NavBar from "../../Home/components/NavBar"
import Menu from "../../Home/components/Menu"
import Footer from "../../Home/components/Footer"
import { Add, Remove } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props: any) => props.color};
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Cart = () => {
  const navigate = useNavigate()
  return (
    <div className="cart">
      <Announcement />
      <div className="menu-bar">
        <NavBar />
        <Menu />
      </div>
      <div className="wrapper">
        <h1>YOUR BAG</h1>
        <div className="top">
          <button className="continue-shopping" onClick={() => navigate("/collections")}>CONTINUE SHOPPING</button>
          <div>
            <span className="text">Shopping Bag(2)</span>
            <span className="text">Your Wishlist (0)</span>
          </div>
          <button className="checkout">CHECKOUT NOW</button>
        </div>
        <div className="main">
          <div className="info">
            <div className="product-cart">
              <div className="product-detail-cart">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                  className="image"
                />
                <div className="detail">
                  <span>
                    <b>Name:</b> JESSIE THUNDER SHOES
                  </span>
                  <ProductColor color="black" />
                  <span>
                    <b>Size:</b> 31
                  </span>
                </div>
              </div>
              <div className="price-detail">
                <div className="product-amount-container">
                  <Remove />
                  <div className="product-amount">1</div>
                  <Add />
                </div>
                <div className="product-price">VND: 5000000</div>
              </div>
            </div>
            <Hr />
            <div className="product-cart">
              <div className="product-detail-cart">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                  className="image"
                />
                <div className="detail">
                  <span>
                    <b>Name:</b> JESSIE THUNDER SHOES
                  </span>
                  <ProductColor color="black" />
                  <span>
                    <b>Size:</b> 31
                  </span>
                </div>
              </div>
              <div className="price-detail">
                <div className="product-amount-container">
                  <Remove />
                  <div className="product-amount">1</div>
                  <Add />
                </div>
                <div className="product-price">VND: 5000000</div>
              </div>
            </div>
            <Hr />
          </div>

          <div className="summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
                <span>Subtotal</span>
                <span>VND 500000</span>
            </div>
            <div className="summary-item">
                <span>Estimated Shipping</span>
                <span>VND 500000</span>
            </div>
            <div className="summary-item">
                <span>Shipping Discount</span>
                <span>VND 500000</span>
            </div>
            <div className="summary-item-total">
                <span>Total</span>
                <span>VND 500000</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
