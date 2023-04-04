

import React, { useContext } from 'react';
// import { Helmet } from 'react-helmet';
import item1Img from './item-1.png';
import { Store } from "../Magasin";
import axios from 'axios';
import { Await, Navigate, useNavigate, useParams } from 'react-router-dom';
import '../pagecss/paniercss.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';


const Panier = () => {
    const navigate = useNavigate();
      const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  //fonction pour augmenter la quantite du item 
  const updatePanier = async (item , quantity)=>{
    // payload contient un objet Product qui s'ajout au cart  avec une quantie 1

    const result = await axios.get(`http://localhost:3001/api/products/id/${item.id}`);

    // condition sur la quantite du produit en stock  
    if (result.data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    // payload contient un objet Product qui s'ajout au cart  avec une quantie 1
    ctxDispatch({type:'CART_ADD_ITEM' ,       payload: { ...item, quantity },})
 
  }

  const supprimer = async(item)=>{
    console.log('jjdn');
    ctxDispatch({type:'CART_SUPP_ITEM' ,       payload: item})

  }

  const Payement = ()=>{
    navigate('/pages/payment');
  }

  

  return (
    <body className="boody" style={{background: '#dfa54f' }}   >
    {/* <Navbar/> */}   <div style={{background:"black"}}><Navbar/></div>
    <div>
        <title>Shopping Cart</title>
      
      <div className="row">
        <div className="col-md-6">
                {cartItems.length === 0 ? (
          <div>
            <p>Cart is empty. <a href="/">Go Shopping</a></p>
          </div>
        ) : (
          <ul className="list-group">
          {cartItems.map((item) => (
            <li className="list-group-item" key={item.id}>
              <div className="row align-items-center">
                <div className="photo">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded img-thumbnail"
                  />
                </div>
                <a href="" className="col-md-2" style={{color:"black"}}>{item.name}</a>
                <div className="col-md-5 align-items-center">
                                    <button className="btn btn-light"  disabled={item.quantity === 1}
                                    onClick={()=> updatePanier(item , item.quantity  - 1)}
                                    >Min
                                    </button>
                  <span style={{marginTop:'6%'}}>{item.quantity}</span>

                                      <button className="btn btn-light"
                                      onClick={()=> updatePanier(item , item.quantity + 1)}
                                        disabled={item.quantity === item.countInStock}
                                      >Plus
                                        <i ></i>
                                      </button>
                </div>
                <div className="col-md-1">${item.price}</div>
                <div className="col-md-2">
                <button className="btn btn-light" onClick={() => supprimer(item)} >
                                      <i className="fas fa-trash"></i>delete
                                    </button>
                </div>
              </div>
            </li>
            ))}
          </ul>
          )}
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                                <h3>
                                  total ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                  ) : $
                                  {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                                </h3>
                </li>
                <li className="list-group-item">

                 <div className="d-grid">
                  <button
                  className="btn btn-primary"
                    type="button"
                    disabled={cartItems.length === 0}
                    onClick={Payement}
                  >
                    Payer
                  </button>
                </div>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
                <h2 style={{marginTop:'17%' , color:'#dfa54f'}}>copy right</h2>
    </body> 
  );
};

export default Panier;
