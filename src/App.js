// import "./styles.css";
import React from "react";
// import { Routes } from "react-router-dom";
import {Routes, Route} from "react-router-dom";

import {Home} from "./pages/Home";
import {PasswordInput} from "./pages/PasswordInput";
import {EmailInput} from "./pages/EmailInput";
import {Users} from "./pages/Users";


export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login-email" element={<EmailInput/>}></Route>
        <Route path="/login-password" element={<PasswordInput/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
      </Routes>
    
  );
}
