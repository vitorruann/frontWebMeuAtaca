import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function IndexPromo({history}) {
  const [promo, setPromo] = useState([]);

  useEffect(()=> {
    async function loadpromo() {

      const id = localStorage.getItem('id_mercado');

      const response = await api.get(`/promotion/${id}`);

      setPromo(response.data);
    }

    loadpromo();
  },[])

  return (
    <>
      <h1>Visualizar Promoção por mercado</h1>
      <br/>
      {promo.map(p => (
        <div key={p._id} className="info">
        <br/>
        <strong>ID: </strong><label htmlFor="">{p._id}</label>
        <br/>
        <strong>Nome: </strong><label htmlFor="">{p.product}</label>
        <br/>
        <strong>Valor: </strong><label htmlFor="">{p.value}</label>
        <br/>
        <strong>Quantidade: </strong><label htmlFor="">{p.quantity}</label>
        <br/>
        <strong>Descrição: </strong><label htmlFor="">{p.description}</label>
        <br/>
        <strong>ID mercado: </strong><label htmlFor="">{p.marketID}</label>
        <br/>
        <strong>Nome mercado: </strong><label htmlFor="">{p.marketName}</label>
        <hr/>
    </div>       
      ))}
      <a href="/visualizarPromocoes"><button type="button">Home</button></a>
      <a href="/visualizarMercados"><button type="button">Voltar</button></a>
    </>
  );
}

export default IndexPromo;