import { Actiontypes } from "./Actiontypes"
export const setProducts =(products)=>{
    return{
        type: Actiontypes.SET_PRODUCTS,
        payload:products
    };
}
export const selectedProduct = (product)=>{
    return{
            type: Actiontypes.SLECTED_PRODUCT,
            payload:product
    }
}
export const removeSelectedProduct=()=>{
    return{
        type: Actiontypes.REMOVE_SELECTED_PRODUCT
        
}
}
export const cartProduct = (product)=>{
    return{
            type: Actiontypes.ADD_TO_CART,
            payload:product
    }
}

export const incrementQuantity = (number)=>{
    return{
            type: Actiontypes.INCREMENT_QUANTITY,
            payload:number
           
    }
}
export const decrementQuantity = (number)=>{
    return{
            type: Actiontypes.DECREMENT_QUANTITY,
            payload:number
           
    }
}

export const displayUname = (text)=>{
   return{   
          type:Actiontypes.DISPLAY_USERNAME,
          payload:text
   }
}
export const UpdateCart = (number)=>{
    return{   
           type:Actiontypes.CART_UPDATION,
           payload:number
    }
 }
 export const removecartProduct = (number)=>{
    return{
            type: Actiontypes.REMOVE_FROM_CART,
            payload:number
    }
}