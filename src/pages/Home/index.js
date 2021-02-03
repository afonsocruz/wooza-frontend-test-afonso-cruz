import React from 'react';

import Card from '../../components/Card';

import { Wrapper, CardBackgroundArea } from '../../styles/globalStyle';

import { HomeStyle } from './styles';


function Home() {
  return (
  <Wrapper>
    <HomeStyle>
     <h2>Escolha um serviço abaixo:</h2>
     <CardBackgroundArea>
      <Card />
     </CardBackgroundArea>
    </HomeStyle>
  </Wrapper>
  )
}

export default Home;
