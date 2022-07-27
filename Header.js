import React,{useState,useRef} from 'react'
import { useSelector } from 'react-redux';  

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    const getUname = useSelector(state => state.showUname)
    
    const cartValue = useSelector(state=>state.cartUpdate)
    console.log(cartValue)
    const[ddval,setddVal]= useState();
   
    const handledropdownItems=(event)=>{
     
      setddVal(event.target.value)
    }
    const ddchangeHandler = (event)=>{
      setddVal(event.target.value)
      inputRef.current.focus();
     if(event.target.value == "All Products"){
      document.getElementById("MenF").classList.add('highlight')
     }
    else if(event.target.value == "Womens Fashion"){
      document.getElementById("MenF").classList.remove('highlight')
      document.getElementById("AccF").classList.remove('highlight')
      document.getElementById("KidsF").classList.remove('highlight')
      document.getElementById("WomenF").classList.add('highlight')
     }
    else if(event.target.value == "Kids Wear"){
      document.getElementById("MenF").classList.remove('highlight')
      document.getElementById("WomenF").classList.remove('highlight')
      document.getElementById("KidsF").classList.add('highlight')
     }
    else{
      document.getElementById("MenF").classList.remove('highlight')
      document.getElementById("WomenF").classList.remove('highlight')
      document.getElementById("KidsF").classList.remove('highlight')
      document.getElementById("AccF").classList.add('highlight')
     }
    }
    
    const inputRef = useRef();
      return (
        <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand"><strong>W-kart.in</strong></a>
        <form className="form-inline">
          <div className="rowCst">
            <div className="cateDD">
              <select className='ddCategories' value={ddval} onChange={ddchangeHandler}>
                  <option value="All">All</option>
                  <option>Mens Fashion</option>
                  <option>Womens Fashion</option>
                  <option>Kids Wear</option>
                  <option>Accesorries</option>   
              </select>
          </div>
          <div className="Searchtxt">
          <input className="form-control mr-sm-2" ref={inputRef} type="search" aria-label="Search"/>
          </div>
          <div className='Searchbtn'>
          <button type="submit" className='btnSearch'><i class="fa fa-search"></i></button>
          </div>
          </div>
        </form>
        <div className="userInfo">
            <img className='lmname' src={'/images/loginlogo.jpg'}/>
            <p className='pTxt'>{getUname['item']}</p>
        </div>
        
        <select value={ddval} className="userDetails" onChange={handledropdownItems}>
                     
                     <option value='male'>Account</option>
                     <option value='female'>My Orders</option>
                     <option value='others'>Settings</option>
                   </select>
         <div className="cart">
          <button type="submit" class="btnCart"><img alt="" style={{'width':'25px'}} src={'/images/34627.png'}/><sup>{cartValue}</sup></button>
          <span><strong>Cart</strong></span>
          </div>          
           
    
      </nav>
     
      </div>
      )
}
