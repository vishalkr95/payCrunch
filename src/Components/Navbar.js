import * as React from 'react';
import {useState,useContext,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Signup from './Signup';
import Profile from './Profile';
import Home from './Home';
import Services from './Services';
import { useNavigate } from "react-router-dom";
import {Link} from  'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
export default function Navbar() {
  const {logout} = useContext(AuthContext);
   const handleClick=async()=>{
     let res=await logout();
   }
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            
            <MenuIcon />

          </IconButton>
          <Link to="/" style={{textDecoration:'none' ,color:'white', marginLight:'8px'}}>HOME</Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <div>
             <Link to="/services" style={{textDecoration:'none' ,color:'white', marginRight:'8px'}}>SERVICES</Link>
            <Link to="/Profile" style={{textDecoration:'none' ,color:'white', marginRight:'8px'}}>PROFILE</Link>
            <Link to="/login" style={{textDecoration:'none' ,color:'white', marginRight:'8px'}}>LOGIN</Link>
            <Link to="/signup" style={{textDecoration:'none' ,color:'white' ,marginRight:'8px'}}>SIGNUP</Link>
            <Button style={{textDecoration:'none' ,color:'white'}}onClick={handleClick}>Logout</Button>
          </div>

        </Toolbar>
        
      </AppBar>
      
    </Box>
    
    </>
  );
}