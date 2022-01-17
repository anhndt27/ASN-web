import React from 'react'
import "../styles/menu.scss"
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className='menu'>
                <div className="menu-wrapper">
                    <p className="menu-item">WHAT'S NEW</p>
                    <Link className="menu-item" to="/collections">COLLECTIONS</Link>
                    <p className="menu-item">CATOGORIES</p>
                    <p className="menu-item">SALES</p>
                    <p className="menu-item">CONTACT</p>
                    <p className="menu-item">ABOUT</p>
            </div>
        </div>
    )
}

export default Menu
