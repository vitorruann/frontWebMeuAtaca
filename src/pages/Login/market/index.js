import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

function LoginMarket({history}) {

   async function handleSubimit(data) {

    try {
      const response = await api.post('/sessionsMarket', {
        email: data.email,
        password: data.password
      });
  
      await localStorage.setItem('id_mercado', response.data.id);
  
      history.push('/visualizarPromocao');
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  return (
    <>
      <h1>Login Mercado</h1>
      <br/>
      <Form onSubmit={handleSubimit}>
        <label htmlFor="email">Email: </label>
        <Input name="email" id="email" placeholder="Digite o email para login"/>
        <label htmlFor="password">Senha: </label>
        <Input type="password" name="password" id="password" placeholder="Digite senha"/>
        <button type="submit">Entrar</button>
      </Form>
      <div className="info">
          <br/>
          <a href="/criarMercado"><button type="button">Cadastrar-se</button></a>
      </div>
    </>
  );
}

export default LoginMarket;