import React, { useState } from 'react'; //useState serve para criação de estados
import api from './services/api';
import './App.css';
import logo from './assets/logo.svg';

function App() {
                                           //useState('') => os valores começam vazios pq não há valores
  const [email, setEmail] = useState(''); //email => me retorna o valor atual do email
                                         //A função setEmail => serve pra atualizar o valor do useState que no caso é atualizar o valor da variável email, valor q o user digitou ou alterou 

  async function handleSubmit(e) {
    e.preventDefault();
    //console.log(email);

    const response = await api.post('/sessions', { email: email }); //em casos que a chave e o valor são os mesmos, podemos colocar apenas campo com email ao invés de dois, deixei os dois pra ser mostrado como se faz a maneira tradicional
    console.log(response);   //nesse console irá mostrar um erro e não será possivel enviar a requisição pra api, o CORS bloqueia isso, pq o CORS protege sua API pra que niguém consuma sua API e roube seus dados
                            //comando =>  npm install cors ou yarn add cors se o yarn tiver instalado

    //Caso queira só pegar o _id de dentro do response com destructuring
    const { _id } = response.data;
    console.log(_id); 
    
    //localStorage => funciona como um banco de dados dentro do nosso browser
    //apenas com essa linha abaixo, já estará salvo o id na nossa aplicação
    //vá na aba Application do devtools e procure localstorage e verá a informação lá
    localStorage.setItem('user', _id); 
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
