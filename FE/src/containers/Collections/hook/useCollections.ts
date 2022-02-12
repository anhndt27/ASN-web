import { useEffect, useState } from "react"
import { getAllProductsApi } from "../../../services/Collections"
import toast from "react-hot-toast"

const useCollections = () => {
    const [productsData, setProductsData] = useState<any>()
    const getAllProductsApiProduct = async () => {
        try {
          const res = await getAllProductsApi()
          setProductsData(res.data)
        } catch (e: any) {
          toast.error(e.message)
        }
      }

      useEffect(() => {
        getAllProductsApiProduct()
      }, [])
  return {
    productsData
  }
}

export default useCollections