import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  span, p, input {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  body {
    background: #173F5F;
  }

  h2 {
    color: #FFF;
  }
`
export const Wrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 32px auto;
  @media screen and (max-width: 1225px) {
    max-width: 700px;
  }
  @media screen and (max-width: 789px) {
    max-width: 450px;
  }
  @media screen and (max-width: 500px) {
    max-width: 340px;
  }
`

export const CardBackgroundArea = styled.div`
  margin-top: 20px;
  background-color: #f7f7f7;
  width: 1170px;
  border-radius: 8px;
  box-shadow: -8px 6px 28px -3px rgba(0,0,0,0.64);
  -webkit-box-shadow: -8px 6px 28px -3px rgba(0,0,0,0.64);
  -moz-box-shadow: -8px 6px 28px -3px rgba(0,0,0,0.64);
  display: flex;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 32px 0px;
  @media screen and (max-width: 1225px) {
    max-width: 700px;
  }
  @media screen and (max-width: 789px) {
    max-width: 450px;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    max-width: 340px;
  }
`


