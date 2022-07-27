import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';
import {UpdateCart} from './ProductAction'
import { useDispatch } from 'react-redux';
export default function SingleProductD() {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
    const product= useSelector(state=>state.selectProduct);
    const{id,image,title,price,description,category} = product;
    const handleCartClick= ()=>{
      dispatch(UpdateCart(0))
      naviagte(`/addtocart/${id}`)

    }
  return (
    <div><Header></Header><div class='container-fluid'>
    <div class="card mx-auto col-md-3 col-10 mt-5">
        <img class='mx-auto img-thumbnail' src={image} width="auto" height="auto"/>
        <div class="card-body text-center mx-auto">
            <div class='cvp'>
                <h5 class="card-title font-weight-bold">{title}</h5>
                <p class="card-text">${price}</p>
                <a href="#" class="btn details px-auto">view details</a><br />
                <a href="#" class="btn cart px-auto" onClick={handleCartClick}>ADD TO CART</a>
            </div>
        </div>
    </div>

</div></div>
  )
}
