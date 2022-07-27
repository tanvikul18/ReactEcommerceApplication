import React from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
export default function ProductComponent() {
    const naviagte=useNavigate();
    /*const handleProductspecif=()=>{
        naviagte('/productspecification/1')
    }*/
    const products= useSelector(state=>state.allProducts.products);
    const renderListAll = products.map((product)=>{
        const{id,title,image,price,category} = product;
        return(
           
                           
                <div className='col-md-4'  key={id}>
                <Link to={`/productspecification/${id}`}>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='image'>
                                <img src={image} alt={title}></img>
                            </div>
                            <div className='card-text'>
                                <div className='header'>{title}</div>
                                <div className='meta price'>${price}</div>
                                <div className='meta'>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
                </div>   
                
            
        
        )
    })
   const filteredMens = products.filter((product)=>{
     return product.category == "men's clothing"
   })
   const filteredWomens = products.filter((product)=>{
    return product.category == "women's clothing"
  })
  const filteredkids = products.filter((product)=>{
    return product.category == "electronics"
  })
  const filteredAcce = products.filter((product)=>{
    return product.category == "Accesories"
  })
   const renderListMens = filteredMens.map((product)=>{
    const{id,title,image,price,category} = product;
    return(
        <div className='row'>
    
            <div className='col' key={id}>
                <div className='card'>
                <div className='card-body'>
                    <div className='image'>
                        <img src={image} alt={title}></img>
                    </div>
                    <div className='card-text'>
                        <div className='header'>{title}</div>
                        <div className='meta price'>${price}</div>
                        <div className='meta'>{category}</div>
                    </div>
                </div> 
                </div>
            
            </div>
</div>
    )
})
const renderListWomens = filteredWomens.map((product)=>{
    const{id,title,image,price,category} = product;
    return(
        <div>
    <div className='row' key={id}>
      <div className='col'>
        <div className='card'>
            <div className='image'>
                <img src={image} alt={title}></img>
            </div>
            <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>${price}</div>
                <div className='meta'>{category}</div>
            </div>
        </div>
      </div>
    </div>
</div>
    )
})
    return(

        <div className= 'row'>
          
            {renderListAll}</div>
        
    );
 
}
