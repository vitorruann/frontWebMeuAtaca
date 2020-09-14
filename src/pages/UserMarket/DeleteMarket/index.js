import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

function DeleteMarket({history}) {
  const [market, setMarket] = useState({
    id: "ID inicial",
    name: "Nome inicial",
    email: "Email inicial",
    cnpj: "CNPJ inicial"
  });

  useEffect(()=> {
    async function loadMarket() {

      const id = localStorage.getItem('id_mercado');

      const response = await api.get(`/market/${id}`);

      setMarket(response.data);
    }

    loadMarket();
  },[])

  async function handleSubimit(data) {
    const id = data.idMarket;

    const response = await api.delete(`/deleteMarket/${id}`);

    await localStorage.setItem('id_mercado', "");

    setMarket(response.data);

    history.push('/');
  }

  return (
    <>
      <h1>Deletar Mercado</h1>
      <br/>
      <Form onSubmit={handleSubimit}>
        <label htmlFor="idMarket">ID do mercado: </label>
        <Input name="idMarket" id="idMarket" placeholder="Digite o ID do mercado"/>
        <button type="submit">Deletar</button>
      </Form>
      <div className="info">
          <br/>
          <strong>ID: </strong><label htmlFor="">{market.id}</label>
          <br/>
          <strong>Nome: </strong><label htmlFor="">{market.name}</label>
          <br/>
          <strong>Email: </strong><label htmlFor="">{market.email}</label>
          <br/>
          <strong>CNPJ: </strong><label htmlFor="">{market.cnpj}</label>
      </div>
    </>
  );
}

export default DeleteMarket;