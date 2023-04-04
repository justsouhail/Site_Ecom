

import '../pagecss/Navbar.css';
import { Link } from "react-router-dom";
import { Store } from "../Magasin";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';


function Navbar() {
  const { state } = useContext(Store);
  const { cart } = state;
  const navigate = useNavigate();
  function handleSignout() {
    localStorage.removeItem('authToken');
    navigate('/pages/formulaire');
    localStorage.removeItem('user');
    localStorage.removeItem('cartItems');

  }

  const user = JSON.parse(localStorage.getItem('user')); // get the user object from the local storage
  const userName = user ? user.nom : ''; // get the user's name
  console.log(userName);
  return (


    <div className="navbare">
      <div className="icon">
        <Link to="/">
          <h2 style={{ color: '#ff7200', marginTop: "7%" }}>WristWorks</h2></Link>
      </div>

      <div className="menu">
        <ul>
          <li><a href="/">HOME</a></li>
          <li ><a href='/cart' style={{ color: 'white', cursor: 'pointer' }}> Cart
            {(
              // reduce pour calculer la quantite pout chaque produit(cardItem)
              cart.cartItems.reduce((a, c) => a + c.quantity, 0)
            )}
          </a>
          </li>
          <li>
            <a href="#">Welcome   {userName}</a>
          </li>

          <li>
            <a onClick={handleSignout} style={{ color: 'white', cursor: 'pointer' }}>SIGNOUT</a>
          </li>
        </ul>

      </div>
      <div className="search" style={{ fontFamily: 'serif' }}>
        <h2 className="" > {userName}</h2>
      </div>
    </div>
  );
}

export default Navbar;
