import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
 
  const [count, setCount] = useState(0)

  //Product Detail - Open/Close
  const [toggleDetail, setToggleDetail] = useState(false)

  const openProductDetail = () => setToggleDetail(true)
  const closeProductDetail = () => setToggleDetail(false)

//Product Detail - Show product
  const [productToShow, setProductToShow] = useState({    
    title: "",
    price: "",
    description: "",
    images: [0],})

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      toggleDetail,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}