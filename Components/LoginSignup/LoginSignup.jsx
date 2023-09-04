import React, { useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import './LoginSignup.css';


import insta_icon from '../Assets/insta.png'


const LoginSignup = () => {

    const [state, setState] = useState("Log In");
    return (
        <div className='main-div'>
           <div className='container'>
            <div className='container-2nd'>
                <img className='insta-icon' src = {insta_icon} />
                <h5 className='h5-fisrt'>Sign up to see photos and videos <br/>from your friends.</h5>
                <button className='facebook-log-btn'><FaFacebookSquare className='facebook-icon'/><h5>Log in With Facebook</h5></button>
                <div className='orDiv'><span><hr/></span><p>OR</p><span><hr/></span></div>
                {state==="Log In" ? <><input type="text" placeholder='Mobile Number or email address'></input>
                <input type="text" placeholder='Full Name'></input></> : <></>}
                <input type="text" placeholder='Username'></input>
                <input type="password" placeholder='Password'></input>
                <p className='para1'>People who use our service may have uploaded<br/> your contact information to<br/> Instagram. <a href="#">Learn more</a></p>
                <p className='para2'>By signing up, you agree to our <a href='#'>Terms</a>, <br/><a href='#'>Privacy Policy</a> and <a href='#'>Cookies Policy.</a></p>
                <button className='signbtn'>{state==="Log In" ? "Sign Up" : "Log In"}</button>
            </div>
            </div>
            <div className='loginContainer'>
                <p>{state === "Log In" ? "Have an account? ":"Havn't an account? "}<a href='#' onClick={ () => {setState( state == "Log In" ? "Sign Up" : "Log In")}}>{state}</a></p>
            </div>
        </div>
    )
}


export default LoginSignup;