/* eslint-disable react/prop-types */
import React from 'react';

import { CardPcStyle, Container } from './styles';

function CardPc({ plano, onClick }) {
  return (
    <Container onClick={onClick}>
      <CardPcStyle>
        <h4>Plano: {plano.franquia}</h4>
        <span>Valor: {plano.valor}</span>
        <h4>Aparelho: {plano.aparelho.nome}</h4>
        <span>Valor do aparelho: {plano.aparelho.valor}</span>
        <span>Número de parcelas: {plano.aparelho.numeroParcelas}</span>
        {plano.aparelho.valorParcela === false ? <span>Valor de parcela indisponível</span> : <span>Valor das parcelas: {plano.aparelho.valorParcela}</span>}
      </CardPcStyle>
    </Container>
  )
}

export default CardPc;
