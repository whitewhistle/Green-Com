import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Products from './components/products'
import Single from './components/single'
import AppContext from './utils/context';
import Categorypage from './components/categorypage';
import Login from './components/login';
import Registration from './components/registration';
import Admin from './components/admin';
import Users from './components/users';
import { Outlet } from 'react-router-dom';
import { Protector} from "./utils/helpers";
import Adbar from './components/adbar';
import Proentry from './components/proentry';



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
        <Route path='/' element={<Protector Component={Products} />} />
        <Route path="/single/:productId" element={<Protector Component={Single} />}  />
        <Route path="/category/:categoryId" element={<Protector Component={Categorypage} />}  />
      </Route>


      <Route
        element={
          <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <Adbar />
          </div>
          <div style={{ flex: '4.5' }}>
            <Outlet />
          </div>
        </div>
        }
      >
        <Route path='/admin' element={<Protector Component={Admin} />} />
        <Route path='/users' element={<Protector Component={Users} />} />
        <Route path='/proentry' element={<Protector Component={Proentry} />} />
      </Route>
      
      

      </Routes>
      </AppContext>
    </Router>
  );
}

export default App;
