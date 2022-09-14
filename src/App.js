import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Services from './Components/Services'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {AuthProvider} from './Context/AuthContext';

function App() {
  return (
    <div >
      <>
      
      
      <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/' element={<Home/>}/>
        </Routes>
        </AuthProvider>  
      </BrowserRouter>
      </>
      

      

    </div>
  );
}

export default App;
