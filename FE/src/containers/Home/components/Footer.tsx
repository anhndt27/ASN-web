import React from "react"
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material"
import "../styles/footer.scss"
import MailIcon from "@mui/icons-material/Mail"
import PhoneIcon from "@mui/icons-material/Phone"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>ASN Store</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3B5999" }}>
            <Facebook />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E4405F" }}>
            <Instagram />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55ACEE" }}>
            <MailOutline />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E60023" }}>
            <Phone />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>rder Tracking</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <div className="contact-item">
          <Room sx={{ mr: "10px" }} />141 Chien Thang, Tan Trieu, Ha No
        </div>
        <div className="contact-item">
          <PhoneIcon sx={{ mr: "10px" }} /> +84 123456789 
        </div>
        <div className="contact-item">
          <MailIcon sx={{ mr: "10px" }} /> binxeko2000@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Footer
