import React from "react"
import "../styles/admin.scss"
import HomeIcon from "@mui/icons-material/Home"
import TimelineIcon from "@mui/icons-material/Timeline"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PaidIcon from '@mui/icons-material/Paid'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FeedbackIcon from '@mui/icons-material/Feedback'
import MessageIcon from '@mui/icons-material/Message'
import WorkIcon from '@mui/icons-material/Work'
import ReportIcon from '@mui/icons-material/Report'
import {Link} from "react-router-dom"

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="bar-wrapper">
        <div className="bar-menu">
          <h3 className="menu-title">Dash Board</h3>
          <ul className="menu-list">
            <li className="menu-item active">
              <HomeIcon className="icon"/>Home
            </li>
            <li className="menu-item">
              <TimelineIcon className="icon"/>Analytics
            </li>
            <li className="menu-item">
              <TrendingUpIcon className="icon"/>Sales
            </li>
          </ul>
        </div>
        <div className="bar-menu">
          <h3 className="menu-title">Quick Menu</h3>
          <ul className="menu-list">
            <li className="menu-item">
              <PersonOutlineIcon className="icon"/>Users
            </li>
            <li className="menu-item">
              <StorefrontIcon className="icon"/>Products
            </li>
            <li className="menu-item">
              <PaidIcon className="icon"/>Transactions
            </li>
            <li className="menu-item">
              <BarChartIcon className="icon"/>Reports
            </li>
          </ul>
        </div>
        <div className="bar-menu">
          <h3 className="menu-title">Notifications</h3>
          <ul className="menu-list">
            <li className="menu-item">
              <MailOutlineIcon className="icon"/>Mail
            </li>
            <li className="menu-item">
              <FeedbackIcon className="icon"/>Feedback
            </li>
            <li className="menu-item">
              <MessageIcon className="icon"/>Messages
            </li>
          </ul>
        </div>
        <div className="bar-menu">
          <h3 className="menu-title">Staff</h3>
          <ul className="menu-list">
            <li className="menu-item">
              <WorkIcon className="icon"/>Manage
            </li>
            <li className="menu-item">
              <TimelineIcon className="icon"/>Analytics
            </li>
            <li className="menu-item">
              <ReportIcon className="icon"/>Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
