import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Wrapper, CardBackgroundArea } from '../../styles/globalStyle';
import api from '../../api/api';

import CardTablet from '../../components/CardTablet';
import CardPc from '../../components/CardPc';
import CardWifi from '../../components/CardWifi';

import { ServicePlansStyle } from './styles';

function ServicePlans() {

  const { sku } = useSelector((state) => state.order.data.platform);
  const { orderInitialized } = useSelector((state) => state.order);

  const [servicePlans, setServicePlans] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  function handlePickPlan(data) {
    const { nome, valor, aparelho, franquia } = data;
    const skuPlan = data.sku;

    if (!aparelho) {
      dispatch({
        type: 'UPDATE_PLAN',
        payload: {skuPlan ,nome, valor, franquia, aparelho:false },
      });
      history.push(`/checkout`);
      return;
    }

    const equipamento = {
      nome: aparelho.nome,
      valor: aparelho.valor,
    };

    dispatch({
      type: 'UPDATE_PLAN',
      payload: { skuPlan, nome, valor, franquia, aparelho: equipamento },
    });

    history.push(`/checkout`);
  }

  useEffect(() => {
    api.get(`/planos/${sku}`)
      .then((response) => {
        const { planos } = response.data;
        const planosAtivos = planos.filter((plano) => plano.ativo === true)
        setServicePlans(planosAtivos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sku, history, orderInitialized]);

  function selectCard(plano, index) {
    switch (sku) {
      case 'TBT01':
        return (
          <CardTablet
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
  return (
    <Wrapper>
      <CardBackgroundArea>
       <ServicePlansStyle>
        {servicePlans.map(selectCard)}
       </ServicePlansStyle>
      </CardBackgroundArea>
    </Wrapper>
  )
}

export default ServicePlans;
