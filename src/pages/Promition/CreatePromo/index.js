import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import api from '../../../services/api';

function CreatePromo({history}) {
  async function handleSubimit(data) {
    try {
      const id = localStorage.getItem('id_mercado');

      const response = await api.post(`/newPromotion/${id}`, {
        product: data.product,
        value: data.value,
        quantity: data.quantity,
        description: data.description
      });

      console.log(response);

      history.push('/visualizarPromocao');
    } catch (error) {
      alert(error.response.data.error);
      
    }
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
    </>
  );
}

export default CreatePromo;