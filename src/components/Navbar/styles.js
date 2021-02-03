import styled from 'styled-components';

export const NavbarStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logoArea {
    display: flex;
    align-items: center;
  }

  .logoArea a {
    text-decoration: none;
    color: #f7f7f7;
    font-size: 22px;
    font-weight: 700;
    margin-left: 8px;
  }

  h1 {
    color: #f7f7f7;
    font-size: 24px;
    margin-left: 8px;
  }

  img {
    width: 100px;
  }


  a {
    text-decoration: none;
    color: #f7f7f7;
    font-size: 18px;
  }

  a:hover {
    color: #000;
  }

`
