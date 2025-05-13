"use client"
import useFirebase from "@/components/Firebase/useFirebase";
import { logUser } from "@/components/redux/user/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const {user} = useFirebase()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.userReducer?.userInfo)

    useEffect(()=>{
        dispatch(logUser(user))
    },[user])

    if(currentUser?.role === 'student'){
        return (
            <div className="p-2">
                Student Dashboard 
            </div>
        );
    }

    if(currentUser?.role === 'teacher'){
        return (
            <div className="p-2">
                Teacher Dashboard.
            </div>
        );
    }

    if(!currentUser){
        return (
            <div className="flex justify-center p-2 items-center w-full h-screen">
                Who are you?
            </div>
        );
    }
};

export default page;