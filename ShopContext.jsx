import React,{ createContext, useState } from "react";
import all_products from '../component/Assets/all_product'
export const ShopContext=createContext(null)

const getDefaultcart=()=>{
    let cart={};
    for(let index=0;index<all_products.length+1;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider =(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultcart())

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo=all_products.find((product)=>product.id===Number(item))
            totalAmount+=itemInfo.new_price*cartItems[item]
        }
    }
    return totalAmount;
}

const getTotalCartItem=()=>{
    let totalItem=0;
    for(const item in  cartItems){
       totalItem += cartItems[item];
   }
   return totalItem;
}


    const contextvalue={getTotalCartItem,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart}

    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;