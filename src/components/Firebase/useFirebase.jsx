"use client"
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider, getIdToken } from "firebase/auth";

import { getUser, logUser, removeLoggedError } from "../redux/user/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import app from "./firebase.config";

const auth = getAuth(app)

const useFirebase = () => {
    const [user,setUser] = useState(null)
    const dispatch = useDispatch()

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, passowrd)=>{
        return signInWithEmailAndPassword(auth , email,passowrd)
    }
    const logOut = ()=>{
        dispatch(removeLoggedError())
        dispatch(removeLoggedError())
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            dispatch(getUser(currentUser?.email));
            
            setUser(currentUser?.email)
            if(currentUser){
                dispatch(logUser(currentUser?.email));

                 //get token and store client side
                 const userInfo = {email: currentUser.email};
                 axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/jwt`, userInfo,{withCredentials : true})
                 .then(res =>{
                     if(res.data.token){
                         localStorage.setItem('access-token', res.data.token);
                     }
                 })
             }else{
                localStorage.removeItem('access-token');
             }
       })
   },[])

   return {createUser , signIn , logOut,user  }
};

export default useFirebase;