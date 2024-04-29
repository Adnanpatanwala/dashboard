 
import './App.css';
import Sidebar from './Components/Sidebar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders'; 
import Login from "./pages/Login"
function App() {
  return ( 
    <BrowserRouter>
    <div className='container'>
    <Sidebar/>
    <Routes> 
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/order' element={<Orders/>}/> 
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


 
