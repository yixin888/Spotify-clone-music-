import './Login.css';
import React from 'react';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            
            <img 
            src="https://www.noisyghost.co/wp-content/uploads/2017/09/noisyghost_brand_design_header_lightness_03.jpg" 
            alt="" 
            />

            
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
