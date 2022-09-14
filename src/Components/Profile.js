import React,{useEffect,useState,useContext} from 'react'
import Navbar from './Navbar' 
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import './app.css';
import {database} from '../firebase'
import {AuthContext} from '../Context/AuthContext'
function Profile() {
    const [cuser,setUser] = useState('');
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        const c=database.pusers.get().then(function(snapshot) {
          //console.log('SNAPSHOT', snapshot);
          snapshot.forEach(function(doc) {
             
              if(doc.data().userId==user.uid){
                setUser(doc.data());
              }
              
          })
    
      })
    })
    return (
        <>
        {
             
            <>
                <Navbar/>
                
                <div className="container app">
                    <div >
                        <div >
                            <Typography variant="h5">
                                Name : {cuser.fullname}
                            </Typography>
                            <Typography variant="h6">
                                Eamil : {cuser.email}
                            </Typography>
                            <Typography variant="h6">
                                AccountNumber : {cuser.Account} 
                            </Typography>
                            <Typography variant="h6">
                                Amount : {cuser.Amount} 
                            </Typography>
                            <Typography variant="h6">
                                creditScore :  {cuser.creditScore} 
                            </Typography>
                        </div>
                    </div>
                    
                </div>
            </>
        }
        </>
    )
}

export default Profile