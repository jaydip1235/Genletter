import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{minWidth:'100vw'}}>
      <nav class="navbar navbar-light fixed-top" style={{backgroundColor:'#00703e',backgroundImage:'url("https://www.transparenttextures.com/patterns/light-gray.png")'}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img
              src="https://i.postimg.cc/sX02Ljn8/gen-removebg-preview.png"
              alt="Logo"
              width="150"
              height="24"
            />      
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
