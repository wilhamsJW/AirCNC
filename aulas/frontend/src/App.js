import React from 'react'; 
import './App.css';
import logo from './assets/logo.svg';

//Importação de todas as rotas da aplicação
import Routes from './routes';

function App() {

  return (
    /**A div container é fixa durante toda minha aplicação, o que irá ser alterado é apenas
     * a div content q seguirá a rota escolhida pelo user, App.js está definido no index.js
     * da pasta raíz como conponente padrão a ser mostrado assim que o user abre a aplicação, 
     * ele foi definido pra ser mostrado no html da pasta public, pelo id root no index.js
     */
    <div className="container"> 
      <img src={logo} alt="Logo da AirCnC"/> {/**para incluir um código JS dentro do html, temos q usar chaves */}
  
      <div className="content">
        <Routes />
      
     </div>
    </div>
  );
}

export default App;
