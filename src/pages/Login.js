import React from "react";
import LoginComp from "../components/LoginComp";
const Login = (props) =>  {
 
  return (
    <><LoginComp setIsAuth={props.setIsAuth}/></>
  );
}

export default Login;