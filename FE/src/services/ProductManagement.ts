import axios from "axios"

const BASE_URL = "http://localhost:8080/api"

const GET_ALL_PRODUCTS = `${BASE_URL}/products`
const ADD_PRODUCTS = `${BASE_URL}/products`
const DEL_PRODUCT = `${BASE_URL}/products`

export const getAllProductsApi = () => axios.get(`${GET_ALL_PRODUCTS}`)

export const addProductApi = (formData: any) =>
  axios.post(`${ADD_PRODUCTS}`, formData)

export const delProductApi = (id: any) => 
    axios.delete(`${DEL_PRODUCT}/${id}`)

