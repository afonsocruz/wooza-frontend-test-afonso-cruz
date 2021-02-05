import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Card from '../../components/Card';

import { HomeStyle } from './styles';
import { Wrapper, CardBackgroundArea } from '../../styles/globalStyle';

import api from '../../api/api';

function Home() {

  const [platforms, setPlatforms] = useState([]);

  const history = useHistory();

  const dispatch = useDispatch();

  function getData() {
    api.get('plataformas')
      .then((response) => {
        setPlatforms(response.data.plataformas);
      })
      .catch((err) => {
        console.log(err);
      })
    }



  function handlePickPlatform(data) {
    const { sku, nome } = data;

    dispatch({
      type: 'UPDATE_PLATFORM',
      payload: { sku, nome },
    });
    history.push(`/serviceplans/${sku}`)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
  <Wrapper>
    <HomeStyle>
     <h2>Escolha um serviço abaixo:</h2>
     <CardBackgroundArea>
      {platforms.map((platform) => (
        <Card
          key={platform.sku}
          data={platform}
          onClick={() => handlePickPlatform(platform)}
        />
      ))}
     </CardBackgroundArea>
    </HomeStyle>
  </Wrapper>
  )
}

export default Home;
