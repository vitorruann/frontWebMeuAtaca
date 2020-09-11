import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function ShowMarket({history}) {
  const [market, setMarket] = useState([]);

  useEffect(()=> {
    async function loadmarket() {

      const response = await api.get('/allMarket');

      console.log(response);

      setMarket(response.data);
    }

    loadmarket();
  },[])

  async function handleClick(id) {
    await localStorage.setItem('id_mercado', id);

    history.push('/visualizarPromocoesUsuario')
  }

  return (
    <>
      <h1>Visualizar Mercados</h1>
      <br/>
        {market.map(m => (
          <div key={m.id} className="info">
            <br/>
            <strong>Nome: </strong><label htmlFor="">{m.name}</label>
            <br/>
            <strong>ID: </strong>
            <label htmlFor="id" id="id">{m.id}</label>
            <br/>
            <strong>CNPJ: </strong><label htmlFor="">{m.cnpj}</label>
            <br/>
            <button type="button" onClick={() => handleClick(m.id)}>Selecionar Mercado</button>
            <hr/>
          </div>       
        ))}
        <a href="/visualizarPromocoes"><button type="button">Voltar</button></a>
        
    </> 
  );
}

export default ShowMarket;