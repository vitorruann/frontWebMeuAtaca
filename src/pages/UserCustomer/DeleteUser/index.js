import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

function DeleteUser({history}) {
  const [user, setUser] = useState({
    id: "ID inicial",
    name: "Nome inicial",
    email: "email@inicial",
    cpf: "CPF inicial"
  });

  useEffect(()=> {
    async function loadUser() {

      const id = localStorage.getItem('id');

      const response = await api.get(`/customer/${id}`);

      setUser(response.data);
    }

    loadUser();
  },[])

  async function handleSubimit(data) {
    const id = data.idUser;

    const response = await api.delete(`/deleteCustomer/${id}`);

    await localStorage.setItem('id_mercado', "");

    setUser(response.data);

    history.push('/');
  }

  return (
    <>
      <h1>Deletar Usuário</h1>
      <br/>
      <Form onSubmit={handleSubimit}>
        <label htmlFor="idUser">ID do usuário: </label>
        <Input name="idUser" id="idUser" placeholder="Digite o ID do usuário"/>
        <button type="submit">Deletar usuário</button>
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

export default DeleteUser;