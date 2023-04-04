
import React from 'react'
import '../pagecss/produit.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductScreen from './ProductScreen';


function Produits  (props){

  //console.log(props.info.image)
    return(
// props.info.image props.info.name props.info.description props.info.price

 <Link to={`/product/${props.info.id}`}>

<div>
    <div className="container">
      <div className="row" >
        <div className=" ">
          <div className="product-grid" >
          <div className="product-image">
                      <img className="pic-1" src={props.info.image} alt="Product 1"/>
                      <img className="pic-2" src={props.info.image} alt="Product 1"/>
                      {props.info.countInStock > 0 && <span className="product-sale-label">valable</span>}
                      {props.info.countInStock === 0 && <span className="product-discount-label">nonvalable</span>}
                  </div>
            <div className="product-content" >
              <ul className="rating">
                <li className="fas fa-star"></li>
                <li className="fas fa-star"></li>
                <li className="fas fa-star"></li>
                <li className="fas fa-star"></li>
                <li className="fas fa-star disable"></li>
              </ul>

      
{/* <h3 style={{textAlign:'center' ,fontSize:"x-large"}}>   voir plus</h3> */}
               <h3 className="title"><a href="#">{props.info.name}</a></h3>

             {/* <Link to={ProductScreen}> */}
             
              <div className="price"> ${props.info.price}</div>
             {/* </Link> */}
              <div className="product-button-group">
                <a className="product-like-icon" href="#"><i className="fas fa-heart"></i></a>
                <a className="add-to-cart" href="#"><i className="fa fa-shopping-bag"></i>Voir Plus</a>
                <a className="product-compare-icon" href="#"><i className="fas fa-random"></i></a>
              </div>
            </div>
          </div>
        </div>
        </div>   
     </div>
   </div>
    </Link>

    )
}

export default Produits;
