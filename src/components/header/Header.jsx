import icn1 from  "../../assets/icon/netflix.png"
import icn2 from  "../../assets/icon/search-icon.png"
import icn3 from  "../../assets/icon/cart.png"
import me from  "../../assets/icon/me.jpg"
import arrow from  "../../assets/icon/arrow.svg"

import Avatar from '@mui/joy/Avatar';

import React from "react";
import './header.css'
function Header() {
  return (
    <>
          <div className="header-container">
        <div className="container">
          <div className="left-container">
            <ul>
            <li >
              <a href="#"><img src={icn1} alt="netflix-icon"width='100px' /></a>
            </li>
            <li><a href="#">Store</a></li>
            
            
          </ul>
          </div>
         
          <ul>
            <li className="icon-search">
              <a href="/search/"
                ><img src={icn2} alt="" 
              /></a>
            </li>
            <li className="icon-cart">
              <a href="/cart/"><img src={icn3}alt="" /></a>
            </li>
             <li className="icon-arrow">
              <Avatar alt="Remy Sharp" src={me}/>
            </li>
          </ul>
          </div>
        
      </div>
  
    </>
  );
}

export default Header;