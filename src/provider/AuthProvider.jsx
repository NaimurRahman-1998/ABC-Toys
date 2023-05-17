/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user,setUser] = useState('sam')
    const [loader,setLoader] = useState(true)

    const createUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=> {
            return unsubscribe
        }
    },[])

    const authInfo =  {
        user,
        loader,
        createUser,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;