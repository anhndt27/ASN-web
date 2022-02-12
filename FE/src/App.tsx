import React from "react"
import Dashboard from "./containers/Admin/views/Dashboard"
import Home from "./containers/Home/views/Home"
import Login from "./containers/Account/views/Login"
import { Switch, Route } from "react-router-dom"
import Collections from "./containers/Collections/view/Collections"
import Product from "./components/Product/views/Product"
import Cart from "./containers/Cart/view/Cart"

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/collections"component={Collections} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
  )
}

export default App
