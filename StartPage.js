import {React,useState} from 'react'
import '../App.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { displayUname } from './ProductAction';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faSearch
  } from "@fortawesome/free-brands-svg-icons";

 

export default function StartPage() {
  const[passwd,setPasswd]=useState();
  const[txt,setText]=useState();
    const navigate=useNavigate();
   const dispatch = useDispatch();
    const chngeTxtHandler=(event)=>{
      setText(event.target.value)
    }
   
    const chngePasswdHandler=(event)=>{
       setPasswd(event.target.value)
    }
        const handleOnSubmit=(emailTxt,passwdTxt,event)=>{
          
            if(emailTxt != undefined && passwdTxt != undefined){
                dispatch(displayUname(emailTxt))
                navigate('/dashboard')
                
            }
              
            }
  
  return (
    <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="cards bg-dark texts-white" style={{'border-radius':'1rem'}}>
            <div className="card-body p-5 text-center">
    
              <div className="mb-md-5 mt-md-4 pb-5">
    
                <h2 className="fw-bold mb-2 text-uppercase cstTxt">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
    
                <div className="form-outline form-white mb-4">
                  <input type="text" id="typeEmailX" value={txt} onChange={chngeTxtHandler}  className="form-control form-control-lg" placeholder='Enter Username' required />
                  <label className="form-label" HtmlFor="typeEmailX">UserName</label>
                </div>
    
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" value={passwd} onChange={chngePasswdHandler}  className="form-control form-control-lg" placeholder='Enter Password' required />
                  <label className="form-label" HtmlFor="typePasswordX">Password</label>
                </div>
    
                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
    
                <button className="btn btn-outline-light btn-lg px-5" onClick={()=>handleOnSubmit(txt,passwd)} type="submit">Login</button>
    
                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <FontAwesomeIcon icon={faFacebook} size="2x" color='#fff' padding="3%"/>
                 <span></span>
                <FontAwesomeIcon icon={faTwitter} size="2x" color='#fff' padding="3%"/>
                <FontAwesomeIcon icon={faInstagram} size="2x" color='#fff' padding="3%" />
                </div>
    
              </div>
    
              <div>
                <p className="mb-0 cstTxt">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  
  )
}
