import React, { useContext } from 'react'
import '../pages/CSS/ShopCategory.css'
import {ShopContext} from '../context/ShopContext'
import xyz from '../component/Assets/dropdown_icon.png'
import Item from '../component/Item/Item'

const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext)
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={xyz} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
