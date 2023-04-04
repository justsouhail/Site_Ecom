import React, { useState } from 'react';
import '../pagecss/adminDashboard.css';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

const [pdf, setPdf] = useState("");
const [nom, setNom] = useState("");
const [prix, setPrix] = useState("");
const [categories, setCategories] = useState("");
const [quantité, setQuantité] = useState("");
const [marque, setMarque] = useState("");
const [description, setDescription] = useState("");

const handleSubmit = async (event) => {
    const response = await Axios.get('http://localhost:3001/products/count');
    const count = response.data.count;
    console.log(`There are ${count} products in the database`);

event.preventDefault();
console.log('Form submitted');
try {
    await Axios.post('http://localhost:3001/addproduit', {
        id : count+1,
      name: nom,
      brand: marque,
      category : categories,
      description : description,
      price : prix,
      countInStock  :quantité,
      rating : 111,
      numReviews : 100 ,
      pdf   :  null,
     });
    alert('Data submitted successfully');
    navigate('/'); 

  } catch (error) {
    console.error(error);
    alert('An error occurred while submitting the data. Please try again later.');
  }
};

return (
<div style={{ background: 'rgb(221, 147, 120)' }}>
<div className="logo"></div>
<div className="login-block">
<h1>Ajouter Produit</h1>
<div className="haut">
<input type="file" value={pdf} style={{ width: '40%', marginLeft: '19%', padding: '1%' }} className="file" />
</div>
<input type="text" value={nom} placeholder="Nom du produit" id="nom" onChange={(event) => setNom(event.target.value)} />
<input type="number" value={prix} placeholder="Prix" id="prix" onChange={(event) => setPrix(event.target.value)} />
<input type="text" value={categories} placeholder="Catégories" id="categories" onChange={(event) => setCategories(event.target.value)} />
<input type="number" value={quantité} placeholder="quantité" id="quantité" onChange={(event) => setQuantité(event.target.value)} />
<input type="text" value={marque} placeholder="marque" id="marque" onChange={(event) => setMarque(event.target.value)} />
<label htmlFor="texte">Description</label>
<textarea name="texte" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
<button onClick={handleSubmit}>Submit</button>
</div>
</div>
);
};

export default AddProduct;