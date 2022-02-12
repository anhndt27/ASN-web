import React, { useState } from "react"
import "../styles/admin.scss"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material"
import useProductManagement from "../hook/useProductManagement"

const ProductManagement = () => {
  const { productsData, addProduct, formAddProduct, setFormAddProduct, delProduct } =
    useProductManagement()
  const [showAddDialog, setShowAddDialog] = useState<boolean>(false)
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false)

  const openAddDialog = () => {
    setShowAddDialog(true)
  }

  const closeAddDialog = () => {
    setShowAddDialog(false)
  }

  const openAddCategory = () => {
    setShowAddCategory(true)
  }
  const closeAddCategory = () => {
    setShowAddCategory(false)
  }

  const handleAddProduct = (formAddProduct: any) => {
    addProduct(formAddProduct)
    setShowAddDialog(false)
  }

  const onChangeFormProductData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormAddProduct({
      ...formAddProduct,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const onChangeCategoryId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormAddProduct({
      ...formAddProduct,
      category: {
        id: e.target.value.trim(),
      },
    })
  }

  const removeProduct = (id: any) => {
    delProduct(id)
  }
  console.log(productsData)
  return (
    <div className="product-management">
      <div className="action-add">
        <Button variant="contained" color="success" onClick={openAddDialog}>
          ADD PRODUCT
        </Button>
        <Button variant="contained" color="success" onClick={openAddCategory}>
          ADD CATEGORY
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell width="15%">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!productsData &&
              productsData.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell scope="row" className="img-cell">
                    <img src={row.productImgURL} alt="" />
                  </TableCell>
                  <TableCell>{row.productName}</TableCell>
                  <TableCell>{row.productPrice}</TableCell>
                  <TableCell>{row.productQuantity}</TableCell>
                  <TableCell>
                    <Button variant="contained" sx={{ mr: "10px" }}>
                      EDIT
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => removeProduct(row.id)}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={showAddDialog} className="action-dialog">
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent sx={{ pt: "10px !important" }}>
          <TextField
            id="outlined-basic"
            label="Name"
            name="productName"
            variant="outlined"
            onChange={onChangeFormProductData}
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Image Url"
            name="productImgURL"
            variant="outlined"
            onChange={onChangeFormProductData}
            sx={{ width: "100%", mt: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Category ID"
            variant="outlined"
            type="number"
            onChange={onChangeCategoryId}
            sx={{ width: "100%", mt: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            name="productPrice"
            variant="outlined"
            type="number"
            onChange={onChangeFormProductData}
            sx={{ width: "100%", mt: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Quantity"
            name="productQuantity"
            variant="outlined"
            type="number"
            onChange={onChangeFormProductData}
            sx={{ width: "100%", mt: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            name="productDescription"
            variant="outlined"
            onChange={onChangeFormProductData}
            sx={{ width: "100%", mt: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAddDialog}>Cancel</Button>
          <Button onClick={() => handleAddProduct(formAddProduct)}>Add</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showAddCategory} className="action-dialog">
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent sx={{ pt: "10px !important" }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAddCategory}>Cancel</Button>
          <Button onClick={closeAddCategory}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ProductManagement
