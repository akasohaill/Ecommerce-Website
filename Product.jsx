import React from 'react'
import { useContext } from 'react'
// import ShopContextProvider from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../component/BreadCrum/BreadCrum'
import { ShopContext } from '../context/ShopContext'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'
import DescriptionBox from '../component/DescriptionBox/DescriptionBox'
import RelatedProduct from '../component/RelatedProduct/RelatedProduct'

const Product = () => {
  const {all_products}=useContext(ShopContext)
  const {productId}=useParams();
  const product=all_products.find((e)=>e.id===Number(productId))
  return (
    <div className='product'>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
