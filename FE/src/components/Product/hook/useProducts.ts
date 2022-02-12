import axios from "axios"
import {useState} from "react"
import toast from "react-hot-toast"

const BASE_URL = "http://localhost:8080/api/products"


const getProductDetailApi = (id: any) => axios.get(`${BASE_URL}/${id}`)

const useProducts = () => {
    const [productDetail, setProductDetail] = useState<any>()

    const getProductDetail = async (id: any) => {
        try {
            const res = await getProductDetailApi(id)
            !!res.data && setProductDetail(res.data)
        } catch (e: any) {
            toast.error(e.message)
          }
    }

    return {
        productDetail,
        getProductDetail
    }
}

export default useProducts