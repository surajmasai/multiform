import React from "react";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Home page</h1>
      <button onClick={() => navigate("/login-email")}>next</button>
    </>
  );
};
