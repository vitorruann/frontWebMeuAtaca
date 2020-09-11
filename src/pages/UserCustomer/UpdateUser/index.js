import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

function UpdateUser({history}) {
  const [user, setUser] = useState({});

  useEffect(()=> {
    async function loadUser() {

      const id = localStorage.getItem('id');

      const response = await api.get(`/customer/${id}`);

      setUser(response.data);
    }

    loadUser();
  },[])

  async function handleSubimit(data) {
    try {
      const id = localStorage.getItem('id');

      const response = await api.put(`/updateCustomer/${id}`, {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        password: data.password,
        confirmPassword: data.confirmPassword,
        oldPassword: data.oldPassword
      });
  
      setUser(response.data);
  
      history.push('/visualizarUsuario');
      
    } catch (error) {
      alert(error.response.data.error);
    }
  } 

  return (
    <>
      <h1>Criar Usuário</h1>
      <br/>
      <Form initialData={user} onSubmit={handleSubimit}>
        <label htmlFor="name">Nome do usuário: </label>
        <Input name="name" id="name" placeholder="Digite o nome do usuário"/>
        <label htmlFor="email">E-mail do usuário: </label>
        <Input name="email" id="email" placeholder="Digite o email do usuário"/>
        <label htmlFor="cpf">CPF do usuário: </label>
        <Input name="cpf" id="cpf" placeholder="Digite o cpf do usuário"/>
        <label htmlFor="password">Senha Atual: </label>
        <Input type="password" name="oldPassword" id="oldPassword" placeholder="Digite a senha antiga do usuário"/>
        <label htmlFor="password">Senha Nova: </label>
        <Input type="password" name="password" id="password" placeholder="Digite a senha novo do usuário"/>
        <label htmlFor="password">Confirma Senha: </label>
        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme a senha antiga do usuário"/>
        <button type="submit">Atualizar</button>
      </Form>
      <div className="info">
          <br/>
          <strong>ID: </strong><label htmlFor="">{user.id}</label>
          <br/>
          <strong>Nome: </strong><label htmlFor="">{user.name}</label>
          <br/>
          <strong>E-mail: </strong><label htmlFor="">{user.email}</label>
          <br/>
          <strong>CPF: </strong><label htmlFor="">{user.cpf}</label>
      </div>
    </>
  );
}

export default UpdateUser;