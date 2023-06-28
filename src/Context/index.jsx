import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)
  const [toggleDetail, setToggleDetail] = useState(false)

  const openProductDetail = () => setToggleDetail(true)
  const closeProductDetail = () => setToggleDetail(false)


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      toggleDetail
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}