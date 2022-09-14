import * as React from 'react';
import {useState,useContext,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';
import {Link} from  'react-router-dom';
import Navbar from './Navbar'
import { Navigate  } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import {database} from '../firebase'
import {useNavigate} from "react-router-dom";
import './app.css'
export default function Signup() {
    const navigate=useNavigate();
    const {signup} = useContext(AuthContext);
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [AccountNumber,setAccount] = useState('');
    const [creditScore,setCredit] = useState(100);
    const [Amount,setAmount] = useState(1);
    useEffect(()=>{
       console.log(email);
    })
    const handleClick = async() => {
        try{
            
            console.log("hello")
            let userObj = await signup(email,password)
            let uid = userObj.user.uid
            database.pusers.doc(uid).set({
                email:email,
                userId:uid,
                fullname:name,
                Account:AccountNumber,
                creditScore : creditScore,
                Amount: Amount,
                createdAt:database.getTimeStamp()
            })
            navigate("/services");
        }catch(err){
            console.log(err);
        }
    }
    
  return (
      <>
      <Navbar/>
      <div className="signupWrapper">
          <div className="signupCard">
            <Card variant="outlined">
                <CardContent>
                    
                    <Typography variant="body2" >
                        Sign up to use Services
                    </Typography>
                    
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <TextField id="outlined-basic" label="Account Number" variant="outlined" fullWidth={true} margin="dense" size="small" value={AccountNumber} onChange={(e)=>setAccount(e.target.value)}/>
                    
                </CardContent>
                <CardActions>
                    <Button color="primary" fullWidth={true} variant="contained"  onClick={handleClick}> 
                     Sign up
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography  variant="body2">
                        By signing up, you agree to our Terms, Conditions and Cookies policy.
                    </Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" >
                <CardContent>
                    <Typography  variant="subtitle1">
                        Having an account ? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
                    </Typography>
                </CardContent>
            </Card>
          </div>
      </div>
      </>
    
  );
}