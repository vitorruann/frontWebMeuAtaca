import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function ShowUser() {
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


  return (
    <>
      <h1>Visualizar Usuário</h1>
      <br/>

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
        <a href="/visualizarPromocoes"><button type="button">Home</button></a>
        <a href="/alterarUsuario"><button type="button">Alterar Perfil</button></a>
        <a href="/deletarUsuario"><button type="button">Excluir Conta</button></a>
    </>
  );
}

export default ShowUser;