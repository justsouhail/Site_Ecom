

// import React from "react";
// import Navbar from "./Navbar";
// import "../pagecss/Home.css";
// import Produits from "./Produits";
// // import photo from "./photos/photosp.jpeg";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Home() {

//   const [loading, setLoading] = useState(true); // Add loading state
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get('http://localhost:3001/api/products');
//         console.log('result.data:', result.data);
//         setProducts(result.data.products);
//         setLoading(false); // Set loading state to false when data is loaded
//       } catch (error) {
//         console.log('error:', error);
//         setLoading(false); // Set loading state to false on error
//       }
//     };
//     fetchData();
//   }, []);




//   return (
//     <div>
//       <div className="main">
//       <Navbar />


      
//       <div className="content">
//         <h1>
//           Web Design &amp; <br />
//           <span>Development</span> <br />
//           Course
//         </h1>
//         <p className="par">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque expedita atque eveniet
//           <br /> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus <br /> a quae totam ipsa illum minus laudantium?
//         </p>
//         <button className="cn">
//           <a href="#">JOIN US</a>
//         </button>
//       </div>

// </div>

//       <div className="produits">

//         {products.map((prod, index) => (
//           <div key={index}>
//             <Produits  info={prod} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default  Home;

import React, { useState } from "react";
import Navbar from "./Navbar";
import "../pagecss/Home.css";
import Produits from "./Produits";
import { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

function Home() {

  const [loading, setLoading] = useState(true); // Add loading state
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3001/api/products');
        console.log('result.data:', result.data);
        setProducts(result.data.products);
        setLoading(false); // Set loading state to false when data is loaded
      } catch (error) {
        console.log('error:', error);
        setLoading(false); // Set loading state to false on error
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="main">
      <Navbar />

      <div className="content">
        <h1>
        <span style={{marginLeft:'1%',color:"white"}}>Faire vos</span>   <br />
          <span style={{marginLeft:'5%'}}>achats</span> 
          <div style={{marginRight:'10%'}}>  en toute           <p style={{color:"#ff7200" ,marginLeft:'5%'}}>confiance</p></div>
        </h1>
        <button className="cn"style={{marginTop:'5%'}}>
          <a href="#kkkkk" >voir produits</a>
        </button>
      </div>

      </div>
      <div className="text" >
        <h1 className="tex"> NOS ARTICLES  </h1>
        <div className="te">  
          Des créations exigeantes, pensées pour s'adapter à la vie
          d'aujourd’hui avec chic et discrétion.
        </div>
      </div>
      <div className="searcsh" style={{marginLeft:"40%"}}>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      <div className="prod" id="kkkkk">
        
        {filteredProducts.map((prod, index) => (
          <div key={index} className="produ">
            <Produits info={prod} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;


