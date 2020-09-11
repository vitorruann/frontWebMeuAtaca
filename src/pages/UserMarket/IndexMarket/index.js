import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function IndexMarket() {
  const [market, setMarket] = useState({});

  useEffect(()=> {
    async function loadmarket() {

      const id = localStorage.getItem('id_mercado');

      const response = await api.get(`/market/${id}`);

      console.log(response);

      setMarket(response.data);
    }

    loadmarket();
  },[])


  return (
    <>
      <h1>Visualizar Mercado</h1>
      <br/>
        <div className="info">
        <br/>
        <strong>Nome: </strong><label htmlFor="">{market.name}</label>
        <br/>
        <strong>ID: </strong><label htmlFor="">{market.id}</label>
        <br/>
        <strong>CNPJ: </strong><label htmlFor="">{market.cnpj}</label>
    </div>       
      <a href="/visualizarPromocao"><button type="button">Home</button></a>
      <a href="/alterarMercado"><button type="button">Alterar Perfil</button></a>
      <a href="/deletarMercado"><button type="button">Excluir Conta</button></a>
    </>
  );
}

export default IndexMarket;