import React from "react";
import '../footer/footer.css';

import Avatar from '@mui/joy/Avatar';
import fb from '../../assets/icon/facebook.png';
import ig from'../../assets/icon/instagram.png';
import yt from'../../assets/icon/youtube.png';
export default function Footer(){
    return (
<>
     <div className="footer-container-wrapper">
             <div className="icon-link-container">
                <ul>
                <li><Avatar alt="Remy Sharp" src={fb}/></li>
                <li><Avatar alt="Remy Sharp" src={ig}/></li>
                <li><Avatar alt="Remy Sharp" src={yt}/></li>
             </ul>
             </div>

             
             <div className="links-container">
                <div className="cat-one">
                <h3>shop and learn</h3>
                <ul>
                    <li><a href="#">mac</a></li>
                    <li><a href="#">ipad</a></li>
                    <li><a href="#">Wallet</a></li>
                    <li><a href="#">Apple Pay</a></li>
                    <li><a href="#">Apple Cash</a></li>
                </ul>
                </div>
        <div className="cat-two">
          <h3>services</h3>
          <ul>
            <li><a href="#">apple music</a></li>
            <li><a href="#">apple news+</a></li>
            <li><a href="#">manage your apple id</a></li>
            <li><a href="#">apple store account</a></li>
            <li><a href="#">icloud.com</a></li>
          </ul>
        </div>
        <div className="cat-three">
             <h3>apple store</h3>
             <ul>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Group Reservations</a></li>
             </ul>
          </div>
            <div className="cat-four">
             <h3>apple store</h3>
             <ul>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Group Reservations</a></li>
             </ul>
          </div>
        </div>
        <div className="copy-right-container">
                <p>
                    More ways to shop: <a href="#">Find an Apple Store</a> or other retailer near you.
                    Or call 1-800-MY-APPLE.
                </p>
               
                    <p>Copyright © 2019 Apple Inc. All rights reserved.</p>
              </div>              
        </div>

</>
    );
}