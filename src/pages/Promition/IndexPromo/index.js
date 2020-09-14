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

  async function handleSubmit() {
    await localStorage.setItem('id_mercado', "");

    history.push('/')
  }


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
      <a href="/criarPromocao"><button type="button">Criar Promoção</button></a>
      <a href="/visualizarMercado"><button type="button">Visualizar Perfil</button></a>
      <form onClick={handleSubmit}>
        <button type="submit">Sair</button>
      </form>
    </>
  );
}

export default IndexPromo;