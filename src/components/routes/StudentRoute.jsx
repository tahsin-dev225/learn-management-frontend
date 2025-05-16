"use client"
import { useDispatch, useSelector } from "react-redux";
import { logUser } from "../redux/user/userSlice";
import useFirebase from "../Firebase/useFirebase";
import { useEffect } from "react";

const StudentRoute = ({role,children}) => {
    const {user} = useFirebase()
    const dispatch = useDispatch();
   
    useEffect(()=>{
        if(user){
            dispatch(logUser(user))
        }
    },[user])
 
    const isStudent = useSelector(state => state?.userReducer?.userInfo)
    // console.log('stish', isStudent)
    const isMatched = role.includes(isStudent?.role)

    if(isMatched === true){
        return <div className="w-full ">
            { children }
        </div>
    }

    return <div className="w-full flex h-screen justify-center items-center">
        <h1 className="text-3xl">You are not valid.</h1>
    </div>
};

export default StudentRoute;