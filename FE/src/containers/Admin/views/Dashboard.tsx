import React from "react"
import "../styles/admin.scss"
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import AdminHome from "../pages/AdminHome"
import ProductManagement from "../pages/ProductManagement"

import HomeIcon from "@mui/icons-material/Home"
import StorefrontIcon from '@mui/icons-material/Storefront'

import { Switch, Route, Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <TopBar />
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-title">
            <HomeIcon className="icon"/>
            <h2>Analytics</h2>
          </div>
          <AdminHome />
        </div>
        <div className="wrapper">
          <div className="wrapper-title">
            <StorefrontIcon className="icon"/>
            <h2>Product Management</h2>
          </div>
          <ProductManagement />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
