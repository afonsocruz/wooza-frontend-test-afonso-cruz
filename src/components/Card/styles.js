import styled from 'styled-components';

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`

export const Container = styled.div`

flex: 1;
  border-radius: 4px;
  box-shadow: 0px 3px 10px -5px rgba(0, 0, 0, 0.5);
  background: #000;
  margin: 20px;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  padding: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.8;
  }
  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
  @media screen and (max-width: 500px) {
    &:hover {
      transform: scale(1.05);
    }
  }

`
