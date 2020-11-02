import React, {useEffect} from 'react';
import api from '../../services/api';

//Aqui serão exibidos, a lista de spots que o user escolheu

export default function Dashboard() {
                              /**useEfect => recebe dois parâmetros, o 1º é um função q pode ser representada por arrown function
//useEffect(() => {}, []); => 2º parâmetro => é um array de dependençias, no meu caso ficará vazio pq nã iremos usar
                              mas ele serve pra serem colocados filtros pra uma nova busca, ex.: Almoço, filtro seria: entrega grátis.container
                              são colocados variáveis dentro para q ela execute novamente a função useEfect com os filtros q o user deseja ver  */

    useEffect(() => {
        async function loadSpots() {

            //Pegando o usuário logado, q já foi salvo no momento q cria o email, em Login/index.js
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            console.log("Dashboard", response.data); 
        } 

        loadSpots();
    }, []);

    return <div>... await</div>
}