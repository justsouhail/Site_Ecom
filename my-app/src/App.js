import './App.css';
import Home from './pages/Home';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductScreen from './pages/ProductScreen';
import Formulaire from './pages/Formulaire';
import Login from './pages/Login';
import Panier from './pages/Panier';
import PaymentForm from './pages/payment';
import AddProduct from './pages/adminDashboard';
function App() {
  return (
    <BrowserRouter>
      <div>
        
          <Routes>
             <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/" element={<Home />} />
            <Route path='/pages/formulaire' element={<Formulaire />} />
            <Route path='/cart' element={<Panier />} />
            <Route path='/pages/payment' element={<PaymentForm />} />
            <Route path='/pages/adminDashboard' element={<AddProduct />} />

            
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
