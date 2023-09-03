import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Products from './components/products'
import Single from './components/single'
import AppContext from './utils/context';
import Categorypage from './components/categorypage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <AppContext>

   
      <Navbar/>
      <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/single/:productId" element={<Single/>}/>
      
      <Route path="/category/:categoryId" element={<Categorypage />}/>
      
      </Routes>
      </AppContext>
    </Router>
  );
}

export default App;
