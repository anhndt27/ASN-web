import React from "react"
import "../styles/categories.scss"
import { categories } from "../../../services/fakeData"

const Categories = () => {
  return (
    <div className="categories">
      <p className="title">POPULAR CATEGORIES</p>
      <div className="container">
        {categories.map((i: any) => (
          <div className="category-item">
            <img src={i.img} alt="" />
            <div className="infor">
                <h1>{i.title}</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
