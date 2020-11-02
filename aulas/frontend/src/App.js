import React, { useState } from 'react'; //useState serve para criação de estados
import api from './services/api';
import './App.css';
import logo from './assets/logo.svg';

function App() {
                                           //useState('') => os valores começam vazios pq não há valores
  const [email, setEmail] = useState(''); //email => me retorna o valor atual do email
                                         //A função setEmail => serve pra atualizar o valor do useState que no caso é atualizar o valor da variável email, valor q o user digitou ou alterou 

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="container">
      <img src={logo} alt="Logo da AirCnC"/> {/**para incluir um código JS dentro do html, temos q usar chaves */}

      <div className="content">
      <p>
      Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
          id="email" 
          type="email" 
          placeholder="Insira seu melhor e-mail"
          onChange={event => setEmail(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
     </div>
    </div>
  );
}

export default App;
