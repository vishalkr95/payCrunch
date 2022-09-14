import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import {AuthContext} from '../Context/AuthContext'
import {useState,useContext,useEffect} from 'react';
import {auth} from '../firebase'
import './app.css'
import {useNavigate} from "react-router-dom";
import {database} from '../firebase'
export default function () {
  const {user} = useContext(AuthContext);
  
  
  
  const [loan,setLoan] = useState(0);
  const [cuser,setUser] = useState('');
  const [repay,setRepay] = useState(0);
  
  
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
  
  
  
  const wantLoan = async() => {
    let setr = parseInt(loan);
    alert(typeof setr)
    let Amount =cuser.Amount-setr
    //let Amount =cuser.Amount-cuser.Amount
    let creditScore= cuser.creditScore+5

    await database.pusers.doc(user.uid).update({ 
      creditScore,Amount
  })
    
  }
  const repayLoan =async () => {
    let setr = parseInt(repay);
    let Amount = cuser.Amount + setr
    let creditScore= cuser.creditScore+10

    await database.pusers.doc(user.uid).update({ 
      creditScore,Amount
  })
  }
  return (
    <div>
       
       {user.email==null?<Login/>:
       <div>
        <Navbar/>
       <div className="app4">
          <h1>payCrunch</h1>
          <h3>Credit score: {cuser.creditScore}</h3>

          want loan <input type="number" value={loan} onChange={(e)=>setLoan(e.target.value)}></input>&nbsp;<button onClick={wantLoan}>ok</button><br /><br />
          Repay loan <input type="number" value={repay} onChange={(e)=>setRepay(e.target.value)}></input>&nbsp;<button onClick={repayLoan}>ok</button>
        
        </div>
        </div>
    
       }
  </div>
  )
}
