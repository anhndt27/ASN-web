import React from "react"
import Dashboard from "./containers/Admin/views/Dashboard"
import Home from "./containers/Home/views/Home"
import Login from "./containers/Account/views/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Collections from "./containers/Collections/view/Collections"
import Product from "./components/Product/views/Product"
import Cart from "./containers/Cart/view/Cart"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
