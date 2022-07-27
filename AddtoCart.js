import React ,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { cartProduct, removeSelectedProduct } from './ProductAction';
import CartDetails from './CartDetails';
import { useParams } from 'react-router-dom';

export default function AddtoCart() {
  debugger;
    
    const dispatch =useDispatch();
   
   const {productId} =useParams();
    const addtoCartProducts= async()=>{
      
        const response =  await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log(err)
        })
     
        dispatch(cartProduct(response.data))
        
    }
    
    useEffect(()=>{
        addtoCartProducts();
        return()=>{
          dispatch(removeSelectedProduct())
        }    
    },[])
  return (
   
    <div> <CartDetails ></CartDetails></div>
   
  )
}
