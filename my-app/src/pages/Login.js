import { useState, useEffect } from "react";
import Axios from 'axios'
import React from 'react';
import { useNavigate } from "react-router-dom";
import '../pagecss/Formulaire.css'

import zxcvbn from 'zxcvbn'
import validator from 'validator'

function Login() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordStrength(zxcvbn(event.target.value).score);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validator.isEmail(newEmail));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailValid) {
      alert('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (passwordStrength < 1) {
      alert("Password is weak. Please choose a stronger password.");
      return;
    }

    try {
      await Axios.post('http://localhost:3001/adduser', {
        nom: nom,
        email: email,
        password: password,
      });
      alert('Data submitted successfully');
      window.location = '/Login';

    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the data. Please try again later.');
    }
  };

  //  LOGIN

  const [message, setMessage] = useState("");

  const navigate = useNavigate();


  const checkuser = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    Axios.post('http://localhost:3001/loguser', {
      email: email, password: password,
    }).then((response) => {

      const { user, token } = response.data; // get the user object from the response
      if (user.email === 'admin@gmail.com') {
        user.role = true;
        navigate('/pages/adminDashboard');
      } else {
        navigate('/');

        localStorage.setItem('user', JSON.stringify(user)); // store the user object in the local storage
        localStorage.setItem('authToken', token); // store token in local storage



        setMessage(response.data.message);
      }

    })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <body className="all" >

      <div className="bbody" >

        <div className="box"></div>


        <div className="login form">
          <header>Login</header>
          <form action="#">
            <input type="text" placeholder="Entrez votre email" required
              onChange={(event) => { setEmail(event.target.value) }} />

            <input type="password" placeholder="Entrez votre mot de passe" onChange={(event) => { setPassword(event.target.value) }} />

            <input type="submit" className="button" value="Login" onClick={checkuser} />
            {message && <p style={{ color: "red" }}>{message}</p>}
          </form>







          <div className="signup">
            <span className="signup">Vous n'avez pas encore de compte ? </span>
            <label htmlFor="check">Signup</label>
          </div>
        </div>
      </div>

    </ body  >
  )

}
export default Login;