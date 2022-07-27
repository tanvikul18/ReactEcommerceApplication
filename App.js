
import './App.css';
import {
 Routes,Route,Switch
} from "react-router-dom";
import StartPage from './Components/StartPage';
import Dashboard from './Components/Dashboard';
import ProductListing from './Components/ProductListing';
import ProductSpecification from './Components/ProductSpecification';
import CartDetails from './Components/CartDetails';
import LastPage from './Components/LastPage';
import AddtoCart from './Components/AddtoCart';

function App() {
  return (
    <div>
     
     <Routes>
      <Route path="/lastpage" element={<LastPage></LastPage>}></Route>
      <Route path ="/addtocart/:productId" element={<AddtoCart></AddtoCart>}></Route>
        <Route path="/productspecification/:productId" element={<ProductSpecification />} />
         <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<StartPage />} />
          <Route>404 not found</Route>
          
        </Routes>
    </div>
  );
}

export default App;
