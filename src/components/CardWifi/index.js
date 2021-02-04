/* eslint-disable react/prop-types */
import React from 'react';

import { CardStyle, Container } from '../Card/styles';

function CardWifi({ plano, onClick }) {
  return (
    <Container onClick={onClick}>
      <CardStyle>
        <h4>{plano.franquia}</h4>
        <span>{plano.valor}</span>
        <h4>{plano.aparelho.nome}</h4>
        <span>{plano.aparelho.valor}</span>
        <span>{plano.aparelho.numeroParcelas}</span>
        <span>{plano.aparelho.valorParcelas}</span>
      </CardStyle>
    </Container>
  )
}

export default CardWifi;
