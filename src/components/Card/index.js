/* eslint-disable react/prop-types */
import { CardStyle, Container } from './styles';

function Card({ data, onClick }) {
  const { nome, descricao } = data;

  const separateDescriptionPipe = (description) => {
    const descriptionLine = description.split('|');
    const newLines = [];
    descriptionLine.map((line) => {
      return newLines.push(<p key={line}>{line}</p>)
    });
    return <>{newLines}</>
  };

  return (
    <Container onClick={onClick}>
      <CardStyle>
        <div className="cardInfo">
          <h4>{nome}</h4>
          {separateDescriptionPipe(descricao)}
        </div>
      </CardStyle>
    </Container>
  );
}

export default Card;
