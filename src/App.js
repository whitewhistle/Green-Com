import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Products from './components/products'
import Single from './components/single'
import AppContext from './utils/context';
import Categorypage from './components/categorypage';
import Login from './components/login';
import Registration from './components/registration';
import { Outlet } from 'react-router-dom';



import Logout from './components/logout';

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
      
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/registration" element={<Registration/>}/>
      
      
      <Route
        element={
          <div>
            <Navbar />
            <Outlet />
          </div>
        }
      >
        <Route index element={<Products />} />
        <Route path="/single/:productId" element={<Single />} />
        <Route path="/category/:categoryId" element={<Categorypage />} />
      </Route>
      
      </Routes>
      </AppContext>
    </Router>
  );
}

export default App;
