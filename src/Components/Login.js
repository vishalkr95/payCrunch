import * as React from 'react';
import { useContext,useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar'
import {Link} from  'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import {useNavigate} from "react-router-dom";
import './app.css'
export default function Login() {
    const store = useContext(AuthContext)
    // const useStyles = makeStyles({
    //     text1:{
    //         color:'grey',
    //         textAlign:'center'
    //     },
    //     card2:{
    //         height:'7vh',
    //         marginBottom:'2vh'
            
    //     }
    // })
    // const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate=useNavigate();
    const {login} = useContext(AuthContext);

    const handleClick = async() => {
        try{
            
            let res = await login(email,password);
            console.log(res);
            navigate("/services");
            console.log("first")
        
        }catch(err){
           console.log(err);
        }
    }

  return (
      <>
      <Navbar/>
      <div className="loginWrapper">
          <div className="loginCard">
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="body2" >
                        Sign up to use Services
                    </Typography>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                    {/* <Typography  color="primary" variant="subtitle1">
                        Forget Password ?
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button color="primary" fullWidth={true} variant="contained"  onClick={handleClick}  >
                    Log in
                    </Button>
                </CardActions>
            </Card>
            <Card variant="outlined" >
                <CardContent>
                    <Typography  variant="subtitle1">
                        Don't have an account ? <Link to="/signup" style={{textDecoration:'none'}}>Signup</Link>
                    </Typography>
                </CardContent>
            </Card>
          </div>
      </div>
      </>

    
  );
}