import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Wrapper, CardBackgroundArea } from '../../styles/globalStyle';
import api from '../../api/api';

import CardPlan from '../../components/CardPlan';
import CardPc from '../../components/CardPc';
import CardWifi from '../../components/CardPc';

function ServicePlans() {

  const order = useSelector((state) => state.order);
  const { orderInitialized } = order;
  const { sku } = useSelector((state) => state.order.data.platform);

  const [servicePlans, setServicePlans] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  function handlePickPlan(data) {
    const { nome, valor, aparelho, franquia } = data;
    const skuPlan = data.sku;

    if (!aparelho) {
      dispatch({
        type: 'UPDATE_PLAN',
        payload: {planSku, nome, valor, franquia, aparelho:false},
      });
      history.push(`/checkout`);
      return;
    }

    const equipamento = {
      nome: aparelho.nome,
      valor: aparelho.valor,
    }

    dispatch({
      type: 'UPDATE_PLAN',
      payload: { skuPlan, nome, valor, franquia, aparelho: equipamento }
    })

    history.push(`/checkout`);
  }

  useEffect(() => {
    api.get(`/planos/${sku}`)
      .then((response) => {
        const { planos } = response.data;
        console.log(planos);
        const planosAtivos = planos.filter((plano) => plano.ativo === true)
        setServicePlans(planosAtivos);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [history, sku, orderInitialized]);

  function selectCard(plano, index) {
    switch (sku) {
      case 'TBT01':
        return (
          <CardPlan
            key={index}
            plano={plano}
            onClick={() => handlePickPlan(plano)}
         />
        )
        case 'CPT02':
        return (
          <CardPc
            key={index}
            plano={plano}
            onClick={() => handlePickPlan(plano)}
          />
        )
        case 'WF03':
        return (
          <CardWifi
            key={index}
            plano={plano}
            onClick={() => handlePickPlan(plano)}
          />
        )
      }
    }

  console.log(sku);
  return (
    <Wrapper>
      <CardBackgroundArea>
        <h2>Escolha um plano abaixo:</h2>
        {servicePlans.map(selectCard)}
      </CardBackgroundArea>
    </Wrapper>
  )
}

export default ServicePlans;
