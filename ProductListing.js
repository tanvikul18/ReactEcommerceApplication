import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from './ProductAction';

import { useLocation } from 'react-router-dom';
import Header from './Header';
export default function ProductListing() {

const {state}=useLocation();

const uSname = state;
console.log(uSname)
   // const products= useSelector(state=>state);
    const dispatch =useDispatch();
   
    const fetchProducts= async()=>{
      
        const response =  await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log(err)
        })
        dispatch(setProducts(response.data))
    }
    //console.log(products)
    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <div>
       <Header></Header>
        <div className='ui grid container'>
       
        <h2>Products Gallery</h2>
        </div>
         <ProductComponent></ProductComponent>
    </div>
  )
}
