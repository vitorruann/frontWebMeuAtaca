import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

function DeletePromo() {
  const [promo, setPromo] = useState([]);

  useEffect(()=> {
    async function loadpromo() {

      const id = localStorage.getItem('id_mercado');

      const response = await api.get(`/promotion/${id}`);

      setPromo(response.data);
    }

    loadpromo();
  },[])

  async function handleSubimit(data) {
    const id = data.idPromo;

    const response = await api.delete(`/deletePromotion/${id}`);

    console.log(response);

  }

  return (
    <>
      <h1>Deletar Promoção</h1>
      <br/>
      <Form onSubmit={handleSubimit}>
        <label htmlFor="idPromo">ID do Promoção: </label>
        <Input name="idPromo" id="idPromo" placeholder="Digite o ID do Promoção"/>
        <button type="submit">Deletar</button>
      </Form>
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
    </>
  );
}

export default DeletePromo;