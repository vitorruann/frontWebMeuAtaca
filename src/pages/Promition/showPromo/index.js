import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function ShowPromo({history}) {
  const [promo, setPromo] = useState([]);

  useEffect(()=> {
    async function loadpromo() {

      const response = await api.get('/allPromotion');

      console.log(response);

      setPromo(response.data);
    }

    loadpromo();
  },[])

  async function handleSubmit() {
    await localStorage.setItem('id', "");

    history.push('/')
  }


  return (
    <>
      <h1>Visualizar todas as promoções</h1>
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
        <hr/>
    </div>       
      ))}
      <a href="/visualizarMercados"><button type="button">Promoção Por Mercado</button></a>
      <a href="/visualizarUsuario"><button type="button">Perfil</button></a>
      <form onClick={handleSubmit}>
        <button type="submit">Sair</button>
      </form>
    </>
  );
}

export default ShowPromo;