/* eslint-disable react/prop-types */
import React from 'react';

import { CardTabletStyle, Container } from './styles';

function CardTablet({ plano, onClick }) {

  console.log(plano);

  return (
    <Container onClick={onClick}>
      <CardTabletStyle>
         <div className="cards">
          <h4>Franquia: {plano.franquia}</h4>
          <span>Valor: {plano.valor}</span>
         </div>
      </CardTabletStyle>
    </Container>
  );
}

export default CardTablet;
