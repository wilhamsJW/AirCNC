import React, {useEffect, useState} from 'react';
import api from '../../services/api';

//Aqui serão exibidos, a lista de spots que o user escolheu

export default function Dashboard() {
                              /**useEfect => recebe dois parâmetros, o 1º é um função q pode ser representada por arrown function
//useEffect(() => {}, []); => 2º parâmetro => é um array de dependençias, no meu caso ficará vazio pq não iremos usar
                              mas ele serve pra serem colocados filtros pra uma nova busca, ex.: Almoço, filtro seria: entrega grátis
                              são colocados variáveis dentro para q ela execute novamente a função useEfect com os filtros q o usuário deseja ver  */

    const [spots, setSpots] = useState([]); //[] => um array vazio pq a informação vem em formato JSON                          

    //No userEffect não conseguimos dizer que ele é uma função async/await então declaramos outra função dentro do tipo async/await
    useEffect(() => {
        async function loadSpots() {

             // Pegando o usuário logado e todos os dados posssiveis existentes para serem exibidos abaixo,
            // q já foi salvo no localStorage nom momento q cria o email, em Login/index.js
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', { //comunicação entre o backend através do axios
                headers: { user_id }
            });

            console.log("response", response);
            setSpots(response.data);   // response.data => visualiza tudo o que tem em DashboardController no backend e em models/spots
                                      // só conseguimos fazer essa comunicação por conta do axios que está na pasta services/api.js
                                     // o axios faz toda essa comunicação entre o front e o back de forma muito inteligente 
        } 

        loadSpots(); //invocandso a função
    }, []);

    return (
        <>
            <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}> 
                
                    {/* è necessário colocar uma key quando se faz um map ou uma estrutura de repetição, pra evitar um aviso no console, o react deseja q seja uma informação única, por exemplo um id */}
                    {/* A tag HEADER foi usada pq será um background de foto, e com essa tag conseguimos fazer todas as fotos ficarem do mesmo tamanho */}

                    <header /> 
                    <strong>{spot.company}</strong>
                    <span>R$ - {spot.price}</span>
                     
                </li>
            ))}
            </ul>
        </>
    )
}