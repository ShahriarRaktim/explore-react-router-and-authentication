import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializeApp from "../Firebase/firebase.init";


firebaseInitializeApp();

const useFirebase =()=>{
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn =() =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
            console.log(result.user)   
        }) 
        .catch(error=>{ 
            setError(error.message)  
        })
        
    }
    
    const logOut = () =>{
            signOut(auth)
            .then(()=>{})
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    },[])

    return {
        user,
        error,
        googleSignIn,
        logOut
    }
}
export default useFirebase;