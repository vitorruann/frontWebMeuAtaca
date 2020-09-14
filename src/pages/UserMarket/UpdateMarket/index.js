import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

function UpdateMarket({history}) {
  const [market, setMarket] = useState({});

  useEffect(()=> {
    async function loadmarket() {

      const id = localStorage.getItem('id_mercado');

      const response = await api.get(`/market/${id}`);

      setMarket(response.data);
    }

    loadmarket();
  },[])

  async function handleSubimit(data) {
    try {
      const id = localStorage.getItem('id_mercado');

      const response = await api.put(`/updateMarket/${id}`, {
        name: data.name,
        email: data.email,
        cnpj: data.cnpj,
        password: data.password,
        confirmPassword: data.confirmPassword,
        oldPassword: data.oldPassword
      });

      setMarket(response.data);
      history.push('/visualizarMercado');
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  return (
    <>
      <h1>Alterar Mercado</h1>
      <br/>
      <Form initialData={market} onSubmit={handleSubimit}>
        <label htmlFor="name">Nome do mercado: </label>
        <Input name="name" id="name" placeholder="Digite o nome do mercado"/>
        <label htmlFor="email">Email do mercado: </label>
        <Input name="email" id="email" placeholder="Digite o email do mercado"/>
        <label htmlFor="cnpj">CNPJ do mercado: </label>
        <Input name="cnpj" id="cnpj" placeholder="Digite o cnpj do mercado"/>
        <label htmlFor="password">Senha Atual: </label>
        <Input type="password" name="oldPassword" id="oldPassword" placeholder="Digite a senha antiga do mercado"/>
        <label htmlFor="password">Senha Nova: </label>
        <Input type="password" name="password" id="password" placeholder="Digite a senha novo do mercado"/>
        <label htmlFor="password">Confirma Senha: </label>
        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme a senha antiga do mercado"/>
        <button type="submit">Atualizar</button>
      </Form>
    </>
  );
}

export default UpdateMarket;