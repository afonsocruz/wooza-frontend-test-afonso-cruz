import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

function Form() {
  const [validForm, setValidForm] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const order = useSelector((state) => state.order.data);

  function checkIfFormIsValidated() {
    if (!name) {
      alert('Favor preencher o campo nome.');
      return;
    }
    if (!email) {
      alert('Favor preencher o campo email.');
      return;
    }
    if (!birth) {
      alert('Favor preencher o campo nascimento');
      return;
    }
    if (!cpf) {
      alert('Favor preencher o campo cpf.');
      return;
    }
    if (!phone) {
      alert('Favor preencher o campo telefone');
      return;
    }
    setValidForm(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const client = {
      nome: name,
      email: email,
      cpf: cpf,
      nascimento: birth,
      telefone: phone
    }

    checkIfFormIsValidated();
    dispatch({
      type: 'UPDATE_CLIENT_DATA',
      payload: { client },
    });
  }

  useEffect(() => {
    if (validForm) {
      console.log(order);
      setValidForm(false);
    }
  }, [validForm, order])

  return (
    <>
      <form onSubmit={() => handleSubmit(event)}>
        <h4 htmlFor="nome" type="text">Nome:</h4>
        <input name="nome"type="text" placeholder="nome" onChange={e => setName(e.target.value)}/>

        <h4 htmlFor="email" type="text">Email:</h4>
        <input name="email"type="text" placeholder="email"onChange={e => setEmail(e.target.value)}/>

        <h4 htmlFor="nascimento" type="text">Nascimento:</h4>
        <input name="nascimento"type="text" placeholder="nascimento"onChange={e => setBirth(e.target.value)}/>

        <h4 htmlFor="cpf" type="text">cpf:</h4>
        <input name="cpf"type="text" placeholder="cpf"onChange={e => setCpf(e.target.value)}/>

        <h4 htmlFor="telefone" type="text">telefone:</h4>
        <input name="telefone"type="text" placeholder="telefone" onChange={e => setPhone(e.target.value)}/>

        <button type="submit">Enviar</button>
      </form>
    </>
  )
}


export default Form;
