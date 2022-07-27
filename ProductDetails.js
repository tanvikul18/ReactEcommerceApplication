import React,{useEffect, useState} from 'react'

import {Routes, Route, useNavigate} from 'react-router-dom';
import ProductListing from './ProductListing';
import axios from 'axios';
import Dashboard from './Dashboard';
export default function ProductDetails(props) {
    const navigate=useNavigate();
   
   const handleMensection = ()=>{
        navigate('/productlisting')
  }
  const handleWomensection = ()=>{
    navigate('/productlisting')
}
    
  return (
    <div>
       
        <div>Select from an exclusive range of categories..</div>
        <div class="getF">
        <div className="cardItems" id="MenF" style={{'width': '18rem'}}>
            <img className="card-img-top" src={'images/MensF.jpg'} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">All Fashion</h5>
            <p className="card-text">Click and explore the vide range of clothes from daily to office wear at your doorstep.</p>
            <a href="#" class="btn btn-primary" onClick={handleMensection}>Go to All's Section</a>
            </div>
        </div>
        <div className="cardItems" id="WomenF" style={{'width': '18rem'}}>
            <img className="card-img-top" src={'images/WomensF.jpg'} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Womens's Fashion</h5>
            <p className="card-text">Click and explore the vide range of clothes from daily to office wear at your doorstep.</p>
            <a href="#" class="btn btn-primary" onClick={handleWomensection}>Go to Womens's Section</a>
        </div>
        </div>
        <div className="cardItems"id="KidsF" style={{'width': '18rem'}}>
            <img className="card-img-top" src={'images/KidsF.jpg'} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Kids's Fashion</h5>
            <p className="card-text">Click and explore the vide range of clothes from daily to office wear at your doorstep.</p>
            <a href="#" class="btn btn-primary">Go to Kids's Section</a>
        </div>
        </div>
        <div className="cardItems" id="AccF" style={{'width': '18rem'}}>
            <img className="card-img-top" src={'images/AcceF.jpg'} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Accesorries's Fashion</h5>
            <p className="card-text">Click and explore the vide range of clothes from daily to office wear at your doorstep.</p>
            <a href="#" class="btn btn-primary">Go to Accesories's Section</a>
        </div>
        </div>
       
     </div>
    </div>
  
  )
}
