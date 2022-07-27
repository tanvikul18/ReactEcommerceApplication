import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { selectedProduct, removeSelectedProduct } from './ProductAction'
import { useParams } from 'react-router-dom'
import SingleProductD from './SingleProductD'
export default function ProductSpecification () {
   
    
   // console.log(product)
    
    const {productId}= useParams();
   
    const dispatch =useDispatch();
    const fetchProduct= async()=>{
      
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log(err)
        })
     //   console.log(response.data)
        dispatch(selectedProduct(response.data))
    
    }
  //  console.log(product)
 //   const{image,title,price,description,category} = product;
    useEffect(()=>{
        if(productId && productId != "")
             fetchProduct();
             return()=>{
               dispatch(removeSelectedProduct());
             }
    },[productId])
   
    
  return ( 
    <div> <SingleProductD></SingleProductD></div>
  )

  
}
