import React from "react"
import "../styles/admin.scss"
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import Home from "../pages/Home"

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home/>
      </div>
    </div>
  )
}

export default Dashboard
