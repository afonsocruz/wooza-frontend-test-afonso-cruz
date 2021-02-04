/* eslint-disable react/prop-types */
import React from 'react';

import { CardStyle, Container } from '../Card/styles';

function CardPlan({ plano, onClick }) {

  console.log(plano);

  return (
    <Container onClick={onClick}>
      <CardStyle>
        <h4>{plano.franquia}</h4>
        <span>{plano.valor}</span>
      </CardStyle>
    </Container>
  );
}

export default CardPlan;
