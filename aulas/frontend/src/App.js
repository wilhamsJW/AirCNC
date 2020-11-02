import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo da AirCnC"/> {/**para incluir um código JS dentro do html, temos q usar chaves */}

      <div className="content">
      <p>
      Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>
      
      <form>
        <label htmlFor="email">E-MAIL *</label>
        <input 
          id="email" 
          type="email" 
          placeholder="Seu melhor e-mail"
    
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
     </div>
    </div>
  );
}

export default App;
