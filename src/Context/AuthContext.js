import React,{useState,useEffect} from 'react'
import { auth } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const AuthContext = React.createContext("");
export function AuthProvider({children}){
    const [user,setUser] = useState("");
    const [loading,setLoading] = useState(true)

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }
    
    function findUser(email){
        return  auth.getUser(email)
  
    }

    function logout(){
        return auth.signOut()
    }

    useEffect(()=>{
        auth.onAuthStateChanged( (user) => {
            if (user) {
              const uid = user.uid;
               setUser(auth.currentUser);
               console.log(user.email)
            } else {
              // User is signed out
            }
          });
    },[user])

    const store={
        user,
        signup,
        login,
        logout,
        findUser
    }

    return(
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    )
}