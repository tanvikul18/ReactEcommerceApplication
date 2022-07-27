import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header';
import { useSelector } from 'react-redux';
export default function LastPage() {
  const {state}= useLocation();
 console.log(state);
  const cartAllProducts = state;  
  let Sum = 0;
  const uniqueProductIds = [];
  
  const uniqueCartProducts = cartAllProducts.cartProducts.filter(element => { 
    if(element.id !== "" && element.id !== undefined){
        const isDuplicate = uniqueProductIds.includes(element.id);
        if (!isDuplicate) {
          uniqueProductIds.push(element.id);

          return true;
        }

        return false;
      }

});
console.log("Unique cart products" +uniqueCartProducts);
  const renderAllCartProducts = uniqueCartProducts.map((cartp)=>{
    const {id,price,image,title,category}= cartp;
      Sum = Sum + Number( `${price}`);
    return(
      <div>
          <div class="card mb-4" key={id}>
          <div class="card-body p-4">

            <div class="row align-items-center">
              <div class="col-md-2">
                <img src={image}
                  class="img-fluid" alt="Generic placeholder image"/>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Name</p>
                  <p class="lead fw-normal mb-0">{title}</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Category</p>
                  <p class="lead fw-normal mb-0"><i class="fas fa-circle me-2" style={{"color": "#fdd8d2"}}></i>
                  {category}</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Quantity</p>
                  <p class="lead fw-normal mb-0">{cartAllProducts.Cquantity}</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Price</p>
                  <p class="lead fw-normal mb-0">${price}</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Total</p>
                  <p class="lead fw-normal mb-0">${price}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      
    </div>
    )
  })
 console.log(renderAllCartProducts)
  return (
    <div>
      <Header></Header>
        <div>
            Thank you for shopping.<i> Please review your order before confirming it.</i>
            
        </div>
        <section class="vh-100" style={{"background-color": "#fdccbc"}}>
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                  <p><span class="h2">Shopping Cart </span><span class="h4">({cartAllProducts.CCartvalue} item/s in your cart)</span></p>
                      {renderAllCartProducts}
                      <div class="cardM mb-5">
                    <div class="card-body p-4">

                      <div class="float-end">
                        <p class="mb-0 me-5 d-flex align-items-center">
                          <span class="small text-muted me-2">Order total:</span> <span
                            class="lead fw-normal">${Sum}</span>
                        </p>
                      </div>

                    </div>
                  </div>

                  <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-light btn-lg me-2">Checkout</button>
                  
                  </div>

                </div>
              </div>
            </div>
      </section>
    </div>
  )
}
