import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { TaskList } from "./TaskList";

export const TaskComponent = ( ) => {
    const navigate = useNavigate()
    
    const user = localStorage.getItem("user") || false

    useEffect(()=>{
        if (!user) {
            navigate("/")            
        }
    })

    return <TaskList user={user}/>
}