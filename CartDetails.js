import React from 'react'
import { useNavigate } from 'react-router-dom'

import { incrementQuantity,decrementQuantity,removecartProduct } from './ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
//const selectedCartProducts=[];
let arrayCart = [],isRemoved=false;
export default function CartDetails() {
  const cproduct= useSelector(state=>state.cartProduct);
  const gquantity = useSelector(state=>state.addminusQuantity)
  let cartValue = useSelector(state=>state.cartUpdate)
  console.log(cartValue)
  arrayCart.push(cproduct);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const{id,title,image,price,quantity,category} = cproduct;
    const handlebuyhandler=()=>{
      if(isRemoved){
        arrayCart.pop();
      }
         navigate('/lastpage' ,{state: {cartProducts:arrayCart,Cquantity:gquantity,CCartvalue:cartValue}})
    }
    const handlecontinueshopping=()=>{
      navigate('/productlisting')
    }
    const handleRemoveProduct=(valueID)=>{
      debugger;
      isRemoved = true;                                                 
      if(valueID.id !== undefined){
      console.log(arrayCart)
      for (let i = 0; i < arrayCart.length; i++) {
        
        if (arrayCart[i].id !== "" && arrayCart[i].id === valueID.id) {
          arrayCart.splice(i, 1);
          break;
        }
      }
      console.log(arrayCart)
     dispatch(removecartProduct(cartValue))
      
      
      cartValue = cartValue - 1;
      document.getElementById('rProduct').innerHTML = "Product removed sucessfully.";
    }
   
    }
    
  
  
    const handleChange=()=>{
      console.log("u got it")
    }
  
 
    
 
   
      return (
        <div>
        <Header></Header>
        <section class="h-100" style={{'background-color': '#eee'}}>
       <div class="container h-100 py-5">
         <div class="row d-flex justify-content-center align-items-center h-100">
           <div class="col-10">
     
             <div class="d-flex justify-content-between align-items-center mb-4">
               <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
               <div>
                 <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                       class="fas fa-angle-down mt-1"></i></a></p>
               </div>
             </div>
   
             <div class="card rounded-3 mb-4" key={id}>
               <div class="card-body p-4">
                 <div class="row d-flex justify-content-between align-items-center">
                   <div class="col-md-2 col-lg-2 col-xl-2">
                     <img
                       src= {image}
                       class="img-fluid rounded-3" alt={title}/>
                   </div>
                   <div class="col-md-3 col-lg-3 col-xl-3">
                     <p class="lead fw-normal mb-2">{title}</p>
                     <p><span class="text-muted">{category}</span></p>
                   </div>
                   <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                     <button class="btn btn-link px-2"
                       onClick={()=>dispatch(decrementQuantity())}>
                       <span>-</span>
                     </button>
     
                     <input id="form1" min="0" name="quantity" onChange={handleChange}  value={gquantity} type="text"
                       class="form-control form-control-sm" />
     
                     <button class="btn btn-link px-2"
                       onClick= {()=>dispatch(incrementQuantity())}>
                      <span>+</span>
                     </button>
                   </div>
                   <div class="col-md-3 col-lg-2 col-xl-2 offset-sm-1">
                     <h5 class="mb-0 cprice">{price}</h5>
                   </div>
                   <div class="col-md-3 col-lg-2 col-xl-1">
                     <button className='removeItem btn btn-primary' onClick={()=>handleRemoveProduct({id})}>Remove Item</button>
                   </div>
                   <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <span>Total: {`${price}` * `${gquantity}`}</span>
                   </div>
                   <div id='rProduct'></div>
                 </div>
               </div>
             </div>
             <div class="cardM mb-4">
               <div class="card-body p-4 d-flex flex-row">
                 <div class="form-outline flex-fill">
                   <input type="text" id="form1" class="form-control form-control-lg" />
                   <label class="form-label" for="form1">Discound code</label>
                 </div>
                 <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
               </div>
             </div>
     
             <div class="cardM">
               <div class="card-body">
                 <button type="button" class="btn btn-warning btn-block btn-lg" onClick={handlebuyhandler}>Proceed to Pay</button>
                 <button type="button" class="btn btn-warning btn-block btn-lg" onClick={handlecontinueshopping}>Continue shopping</button>
              
               </div>
             </div>
           </div>
         </div>
       </div>
      </section>
             
     
           
        </div>
      )
    
  
  
}
