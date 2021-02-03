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
    background: #7588ff;
  }
`
export const Wrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`

export const CardBackgroundArea = styled.div`
  margin-top: 20px;
  background-color: #f7f7f7;
  width: 1170px;
  height: 500px;
  border-radius: 8px;
  box-shadow: -8px 6px 28px -3px rgba(0,0,0,0.64);
  -webkit-box-shadow: -8px 6px 28px -3px rgba(0,0,0,0.64);
  -moz-box-shadow: -8px 6px 28px -3px rgba(0,0,0,0.64);
  display: flex;
  align-items: center;
  justify-content: center;
`


