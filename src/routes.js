import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';

import CriarUsuario from './pages/UserCustomer/CreateUser';
import VisualizarUsuario from './pages/UserCustomer/showUser';
import AlterarUsuario from './pages/UserCustomer/UpdateUser';
import DeletarUsuario from './pages/UserCustomer/DeleteUser';

import LoginUser from './pages/Login/user';
import LoginMercado from './pages/Login/market';

import CriarMercado from './pages/UserMarket/CreateMarket';
import VisualizarMercados from './pages/UserMarket/showMarket';
import VisualizarMercado from './pages/UserMarket/IndexMarket';
import AlterarMercado from './pages/UserMarket/UpdateMarket';
import DeletarMercado from './pages/UserMarket/DeleteMarket';

import CriarPromocao from './pages/Promition/CreatePromo';
import VisualizarPromocaos from './pages/Promition/showPromo';
import VisualizarPromocaosUser from './pages/Promition/indexPromoUser';
import VisualizarPromocao from './pages/Promition/IndexPromo';
import deletarPromocao from './pages/Promition/DeletePromo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/criarUsuario" component={CriarUsuario} />
        <Route path="/visualizarUsuario" component={VisualizarUsuario} />
        <Route path="/alterarUsuario" component={AlterarUsuario} />
        <Route path="/deletarUsuario" component={DeletarUsuario} />

        <Route path="/loginUsuario" component={LoginUser} />
        <Route path="/loginMercado" component={LoginMercado} />

        <Route exact path="/visualizarMercados" component={VisualizarMercados} />
        <Route exact path="/visualizarMercado" component={VisualizarMercado} />
        <Route path="/criarMercado" component={CriarMercado} />
        <Route path="/alterarMercado" component={AlterarMercado} />
        <Route path="/deletarMercado" component={DeletarMercado} />

        <Route path="/criarPromocao" component={CriarPromocao} />
        <Route exact path="/visualizarPromocoes" component={VisualizarPromocaos} />
        <Route exact path="/visualizarPromocoesUsuario" component={VisualizarPromocaosUser} />
        <Route exact path="/visualizarPromocao" component={VisualizarPromocao} />
        <Route path="/deletarPromocao" component={deletarPromocao} />

      </Switch>
    </BrowserRouter>
  )
}