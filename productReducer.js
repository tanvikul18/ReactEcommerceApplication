import { Actiontypes } from "./Actiontypes";

const initialState={
    products:[
       
    ]
    
}
const initialUname = '';
export const productReducer = (state=initialState,action)=>{
 switch(action.type){
    case Actiontypes.SET_PRODUCTS:
        return {...state, products:action.payload};
        break;
       default:
        return state; 
 }
}
export const selectedproductReducer = (state={},action)=>{
    switch(action.type){
       case Actiontypes.SLECTED_PRODUCT:
           return {...state, ...action.payload}
           break;
       case Actiontypes.REMOVE_SELECTED_PRODUCT:
        return {}
          default:
           return state; 
    }
   }
   export const addtocartReducer = (state={},action)=>{
    switch(action.type){
       case Actiontypes.ADD_TO_CART:
           return {...state, ...action.payload};
           break;
          default:
           return state; 
    }
   }
   export const removeformcartReducer = (state={},action)=>{
      switch(action.type){
         case Actiontypes.REMOVE_FROM_CART:
             return {...state, ...action.payload};
             break;
            default:
             return state; 
      }
     }
   export const incrdecreReudcer = (state=1,action)=>{
    switch(action.type){
       case Actiontypes.INCREMENT_QUANTITY:
           return state + 1;
           break;
        case Actiontypes.DECREMENT_QUANTITY:
          return state -1;
          break;   
        default:
           return state; 
    }
   }
   export const displayUsname = (state=initialUname,action)=>{
    switch(action.type){
       case Actiontypes.DISPLAY_USERNAME:
           return {...state, item:action.payload};
           break;
         
        default:
           return state; 
    }
   }
   export const updateCartValueReducer = (state=0,action)=>{
    switch(action.type){
       case Actiontypes.CART_UPDATION:
           return state +1;
           break;
       case Actiontypes.REMOVE_FROM_CART:
          return state - 1;
          break;

        default:
           return state; 
    }
   }