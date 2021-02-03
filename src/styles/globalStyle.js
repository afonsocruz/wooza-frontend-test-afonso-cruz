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
    background: #9054ff;
  }
`
export const Wrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`


