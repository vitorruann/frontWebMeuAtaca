import React from 'react';

function LoginMarket() {

  return (
    <>
      <h1>Home</h1>
      <br/>
      
      <div className="info">
        <a href="/loginUsuario"><button type="button">Cliente</button></a>
        <a href="/loginMercado"><button type="button">Logista</button></a>
      </div>
    </>
  );
}

export default LoginMarket;