import { getAllProductsApi, addProductApi, delProductApi } from "../../../services/ProductManagement"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useProductManagement = () => {
  const [productsData, setProductsData] = useState<any>()
  const [formAddProduct, setFormAddProduct] = useState<any>({
    productName: "Áo sweater",
    category: {
      id: 0,
    },
    productPrice: 0,
    productQuantity: 0,
    productDescription: "",
    productImgURL: "",
  })

  const getAllProductsApiProduct = async () => {
    try {
      const res = await getAllProductsApi()
      setProductsData(res.data)
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  const addProduct = async (formAddProduct: any) => {
      try {
          await addProductApi(formAddProduct)
          toast.success("Add product successfully")
      } catch (e: any) {
          toast.error(e.message)
      }
  }

  const delProduct = async (id: any) => {
    try {
        await delProductApi(id)
        toast.success("Deleted product")
    } catch (e: any) {
        toast.error(e.message)
    }
  }

  useEffect(() => {
    getAllProductsApiProduct()
  }, [])

  return {
    productsData,
    addProduct,
    formAddProduct,
    setFormAddProduct,
    delProduct
  }
}

export default useProductManagement
