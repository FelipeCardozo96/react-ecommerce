import React, { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';




const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside
     className={` ${context.toggleDetail ? 'flex' : 'hidden'}  flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <XMarkIcon className='w-6 h-6 text-black'
            onClick={() => context.closeProductDetail()}></XMarkIcon>
        </div>
    </aside>
  )
}

export default ProductDetail