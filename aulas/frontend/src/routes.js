import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

//Rotas a serem controladas durante navegação do user
export default function Routes() {
    return (
        <BrowserRouter>
         <Switch>
             <Route path="/" exact component={Login}/> {/** exact => para q chame exatamente essa rota apenas com a /, para q não entenda outa coisa e gere erro */}
             <Route path="/dashboard" component={Dashboard}/>
             <Route path="/new" component={New}/>
         </Switch>
        </BrowserRouter>
    );
}