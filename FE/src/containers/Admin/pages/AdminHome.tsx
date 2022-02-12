import React from 'react'
import "../styles/admin.scss"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Chart from "../components/Chart"

const AdminHome = () => {
    return (
        <div className="home">
            <div className="featured">
                <div className="featured-item">
                    <span className="title">Revanue</span>
                    <div className="money-container">
                        <span className="money">$20</span>
                        <span className="money-rate">-10 <ArrowDropDownIcon className="down-icon"/></span>
                    </div>
                    <span className="sub">Compare to last month</span>
                </div>
                <div className="featured-item">
                    <span className="title">Sales</span>
                    <div className="money-container">
                        <span className="money">$20</span>
                        <span className="money-rate">-10 <ArrowDropDownIcon className="down-icon"/></span>
                    </div>
                    <span className="sub">Compare to last month</span>
                </div>
                <div className="featured-item">
                    <span className="title">Cost</span>
                    <div className="money-container">
                        <span className="money">$20</span>
                        <span className="money-rate">+10 <ArrowDropUpIcon className="up-icon"/></span>
                    </div>
                    <span className="sub">Compare to last month</span>
                </div>
            </div>
            <Chart/>
        </div>
    )
}

export default AdminHome
