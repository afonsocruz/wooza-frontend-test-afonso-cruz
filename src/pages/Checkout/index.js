import React from 'react';

import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { Wrapper, CardBackgroundArea } from '../../styles/globalStyle';

import Form from '../../components/Form';

function Checkout() {

  const order = useSelector((state) => state.order);
  const { orderInitialized } = order;
  const history = useHistory();

  if(!orderInitialized) {
    history.push('/');
  }

  return (
    <Wrapper>
      <CardBackgroundArea>
       <Form />
      </CardBackgroundArea>
    </Wrapper>
  );
}

export default Checkout;
