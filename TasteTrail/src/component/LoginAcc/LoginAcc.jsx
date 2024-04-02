import React, { useState } from 'react';
import './LoginAcc.css';
import { assets } from '../../../public/assets/assets';

const LoginAcc = ({ setShowLogin }) => {
  const [SignupState, setSignupState] = useState("Login");

  return (
    <div className='LoginAcc'>
      <form action="" className="loginAcc-container">
        <div className="loginAcc-title">
          <h2>{SignupState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="loginAcc-inputs">
        {SignupState==="Login"? <></>:<input type="text" placeholder='Enter Your Name' required />} 
          <input type="email" placeholder='Enter Your email' required />
          <input type="password" placeholder='password' required />
        </div>
        <button>{SignupState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and privacy policy</p>
        </div>
        {SignupState==="Login"
        ?<p>Do you haven't Account.Create a Account?<span onClick={()=>setSignupState("Sign Up")}>Click hear</span> </p>
        : <p>Already have an account? <span onClick={()=>setSignupState("Login")}>Login hear</span></p>
        }
       
      </form>
    </div>
  );
}

export default LoginAcc;
