import React, { useState,useRef,useEffect } from 'react';

import ProductDetails from './ProductDetails';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { $CombinedState } from 'redux';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';

export default function Dashboard() {
 return(
      <div>
         <Header></Header>
         <ProductDetails></ProductDetails>
      </div>
 )
}
