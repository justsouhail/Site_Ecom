
  
  
  
  
     
    
    
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { Await, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Magasin';
import '../pagecss/ProductScreen.css'
import Navbar from './Navbar';


function ProductScreen(props) {


  const {state  , dispatch : cxtDispatch} = useContext(Store);
  const { cart } = state;
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [Product, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:3001/api/products/id/${id}`);
        setProducts(result.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  },[id]);
//   // la fonction qui ajout au panier 


  const ajouterPanier = async () =>{
    //check si produit exist deja dans le panier
    const existItem = cart.cartItems.find((x) => x.id === Product.id);

    //  si le produit  deja exist on ajout 1 au quantite , sinon on initalise la quantite du produit par 1
    const quantity = existItem ? existItem.quantity + 1 : 1;
    try{
    // utilise asyn/awiat pour attendre un check de quatite en stock avant de ajouter au panier
    //apporter data from  backend
    const result = await axios.get(`http://localhost:3001/api/products/id/${id}`);

    // condition sur la quantite du produit en stock  
    if (result.data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    // payload contient un objet Product qui s'ajout au cart  avec une quantie 1
    cxtDispatch({type:'CART_ADD_ITEM' ,       payload: { ...Product, quantity },})
    navigate('/cart');
  }
  catch(error) {
    console.error(`Error checking product quantity: ${error}`);
    // Show a user-friendly error message in the UI
    window.alert('Sorry, an error occurred while checking the product quantity. Please try again later.');
  }
  }
  
  function createAndDownloadPdf() {
    const pdfData = Product.pdf.data;
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product.pdf';
    a.click();
    URL.revokeObjectURL(url);
  }


  
  return (
            
        <body className="boody" style={{background: '#dfa54f' }}   >
          {/* <Navbar/> */}   <div style={{background:"black"}}><Navbar/></div>

          <div>
          <div className="wrapper">
      <div className="product-img">
        <img src={Product.image} alt="Watch" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1 className="h1" >{Product.name}</h1>
          <div className="rating">
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star-half-alt"></i></span>  
            <span> ({Product.rating})</span>
          </div>
          <p className="descri">{Product.description}</p>
        </div>
        <p className="price">{Product.price} DH</p>

        <div className="product-price-btn">
          <button type="button" className="add-cart-btn" onClick={ajouterPanier} >
            <i className="fa fa-shopping-cart"></i>Add to cart
          </button>
          <button type="button" className="buy-now-btn" onClick={createAndDownloadPdf}>
            <i className="fa fa-wallet"></i>Telecharger PDF
          </button>
        </div>
      </div>
    </div>
    </div>     
    <div style={{marginTop:'5.5%' , textAlign:"center"}} > © Tous les droits réservés.
    </div> 
     </body>
      );
    }
    
    export default ProductScreen;

    