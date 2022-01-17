import React from "react"
import "../styles/product.scss"
import ProductDetail from "../../../components/ProductDetail/views/ProductDetail"
import { Box } from "@mui/material"
import { popularProducts } from "../../../services/fakeData"

const NewProduct = () => {
  return (
    <div className="new-product">
      <p className="title">WHAT'S NEW</p>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyContent: "center",
          }}
          className="product-list"
        >
          {popularProducts?.map((i: any) => (
            <ProductDetail img={i.img} name={i.name} cost={i.cost} />
          ))}
        </Box>
      </Box>
    </div>
  )
}

export default NewProduct
