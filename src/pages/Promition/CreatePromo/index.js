import React, { useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import api from '../../../services/api';

function CreatePromo({history}) {
  const [promo, setPromo] = useState({});

  async function handleSubimit(data) {

    const id = localStorage.getItem('id_mercado');

    const response = await api.post(`/newPromotion/${id}`, {
      product: data.product,
      value: data.value,
      quantity: data.quantity,
      description: data.description
    });

    setPromo(response.data);

    history.push('/visualizarPromocao');
  }

  return (
    <>
      <h1>Criar Promoção</h1>
      <br/>
      <Form onSubmit={handleSubimit}>
        <label htmlFor="product">Nome do produto: </label>
        <Input name="product" id="product" placeholder="Digite o nome do produto"/>

        <label htmlFor="value">Valor do produto: </label>
        <Input name="value" id="value" placeholder="Digite o valor do produto"/>

        <label htmlFor="quantity">Quantidade do produto: </label>
        <Input name="quantity" id="quantity" placeholder="Digite o Quantidade do produto"/>

        <label htmlFor="description">Descrição do produto: </label>
        <Textarea name="description" id="description" placeholder="Digite informações sobre produto"/>
        
        <button type="submit">Criar produto</button>
      </Form>
      <div className="info">
          <br/>
          <strong>ID: </strong><label htmlFor="">{promo._id}</label>
          <br/>
          <strong>Nome: </strong><label htmlFor="">{promo.product}</label>
          <br/>
          <strong>Valor: </strong><label htmlFor="">{promo.value}</label>
          <br/>
          <strong>Quantidade: </strong><label htmlFor="">{promo.quantity}</label>
          <br/>
          <strong>Descrição: </strong><label htmlFor="">{promo.description}</label>
      </div>
    </>
  );
}

export default CreatePromo;