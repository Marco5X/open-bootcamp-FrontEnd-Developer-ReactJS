import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./Login";
import { Register } from "./Register";
import { TaskComponent } from "./Task/TaskComponent";

export const Ruteo = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Tasks" element={<TaskComponent />} />
            </Routes>
        </BrowserRouter>
    )
}
