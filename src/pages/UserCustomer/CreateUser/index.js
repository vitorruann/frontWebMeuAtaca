import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

function CreateUser({history}) {
  async function handleSubimit(data) {
    try {
      await api.post('/newCustomer', {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        password: data.password
      });
  
      history.push('/loginUsuario');
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  return (
    <>
      <h1>Criar Usuário</h1>
      <br/>
      <Form onSubmit={handleSubimit}>
        <label htmlFor="name">Nome do usuário: </label>
        <Input name="name" id="mane" placeholder="Digite o nome do usuário"/>
        <label htmlFor="email">E-mail do usuário: </label>
        <Input name="email" id="email" placeholder="Digite o email do usuário"/>
        <label htmlFor="cpf">CPF do usuário: </label>
        <Input name="cpf" id="cpf" placeholder="Digite o cpf do usuário"/>
        <label htmlFor="password">Senha do usuário: </label>
        <Input type="password" name="password" id="password" placeholder="Digite a senha do usuário"/>
        <button type="submit">Criar usuário</button>
      </Form>
      <div className="info">
          <br/>
          <a href="/"><button type="button">Voltar</button></a>
      </div>
    </>
  );
}

export default CreateUser;