import React from 'react'
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import './app.css';
const Home = () => {
  return (

    <>
    <Navbar/>
      <div className="app2">
             <Typography variant="h3" >
                 Assigment made by Vishal Kumar
              </Typography>
              <div className="app3">
              <Typography variant="h5" >
                 Email: vishalkr09708@gmail.com
              </Typography>
                </div>
      </div>
    <div className="container app1">
      <div>
      <div className="servise" >
      <Typography variant="h5" >
                 From here you can take temporary Lone for daily usase
      </Typography>
      </div>
          <div >
              <Typography variant="h5" >
                 steps:
              </Typography>
              <Typography variant="h6">
               1.Please make your dummy account.
              </Typography>
              <Typography variant="h6">
              2.Please sign in to your account.
              </Typography>
              <Typography variant="h6">
              3.Visit your PayCrunch Dashboard and take loan easily.
              </Typography>
              <Typography variant="h6">
              4.Repay loan to increase your credit Score.
              </Typography>
          </div>
      </div>
      
  </div>
    </>
    
  )
}

export default Home