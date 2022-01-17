import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "../containers/Home/styles/home.scss"
import Home from "../containers/Home/views/Home"
import Login from "../containers/Account/views/Login"
import Dashboard from "../containers/Admin/views/Dashboard"
import Collections from "../containers/Collections/view/Collections"
const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Collections />} />
        <Route path="/collections" element={<Collections />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainLayout
