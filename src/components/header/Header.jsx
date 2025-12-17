import icn1 from "../../assets/icon/netflix.png"
import icn2 from "../../assets/icon/search-icon.png"
import icn3 from "../../assets/icon/cart.png"
import me from "../../assets/icon/me.jpg"
import arrow from "../../assets/icon/down-arrow.png"

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
                <a href="#"><img src={icn1} alt="netflix-icon" width='100px' /></a>
              </li>


            </ul>
          </div>

          <ul>
            <li className="icon-search">
              <a href="#"
              ><img src={icn2} alt=""
                /></a>
            </li>
            <li className="icon-cart">
              <a href="#"><img src={icn3} alt="" /></a>
            </li>
            {/* <li className="icon-arrow">
              <Avatar alt="Remy Sharp" src={me}/>
            </li> */}
            <li className="icon-arrow">
              <a href="#"><img src={arrow} alt="" /></a>
            </li>
          </ul>
        </div>

      </div>

    </>
  );
}

export default Header;