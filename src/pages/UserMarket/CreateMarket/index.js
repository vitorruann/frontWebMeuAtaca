import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

function CreateMarket({history}) {
  

  async function handleSubimit(data) {
    try {
      await api.post('/newMarket', {
        name: data.name,
        cnpj: data.cnpj,
        password: data.password
      });
  
      history.push('/loginMercado');
    } catch (error) {
      alert(error.response.data.error);
    }

    
  }

  return (
    <>
      <h1>Criar Mercado</h1>
      <br/>
      <Form onSubmit={handleSubimit}>
        <label htmlFor="name">Nome do mercado: </label>
        <Input name="name" id="name" placeholder="Digite o nome do mercado"/>
        <label htmlFor="cnpj">CNPJ do mercado: </label>
        <Input name="cnpj" id="cnpj" placeholder="Digite o cnpj do mercado"/>
        <label htmlFor="password">Senha do mercado: </label>
        <Input type="password" name="password" id="password" placeholder="Digite a senha do mercado"/>
        <button type="submit">Criar mercado</button>
      </Form>
    </>
  );
}

export default CreateMarket;