import axios from "axios"
const BASE_URL = "http://localhost:8080/api"

const GET_ALL_PRODUCTS = `${BASE_URL}/products`

export const getAllProductsApi = () => axios.get(`${GET_ALL_PRODUCTS}`)