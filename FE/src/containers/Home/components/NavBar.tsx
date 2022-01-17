import React from "react"
import "../styles/navBar.scss"
import { Button, Grid, Typography } from "@mui/material"
import LanguageIcon from "@mui/icons-material/Language"
import SearchIcon from "@mui/icons-material/Search"
import Badge from "@mui/material/Badge"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="nav-bar">
      <div className="container-nav">
        <Grid container className="wrapper-nav">
          <Grid item xs={4}>
            <LanguageIcon />
            <SearchIcon />
          </Grid>
          <Grid item xs={4} className="logo" onClick={() => navigate("/home")}>
            <Typography className="name-logo">ASN</Typography>
            <Typography className="store-logo">Store</Typography>
          </Grid>
          <Grid item xs={4} className="shopping-cart">
            <Badge badgeContent={4} color="primary">
              <Button variant="text" className="account">
                Register
              </Button>

              <Button variant="text" className="account" onClick={()=> navigate("/login")}>
                Login
              </Button>
              <ShoppingCartIcon onClick={() => navigate("/cart")} sx={{ cursor: "pointer" }}/>
            </Badge>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default NavBar
