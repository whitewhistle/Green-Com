import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Product from './components/products'
import Single from './components/single'
import AppContext from './utils/context';


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
      <Route path="/" element={<Product/>}/>
      <Route path="/single" element={<Single/>}/>
      </Routes>
      </AppContext>
    </Router>
  );
}

export default App;
