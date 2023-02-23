import * as React from "react";

import { BsCheck2 } from "react-icons/bs";
import { formatCurrency } from "../../utils/format";
import styled from "styled-components";

const CardStyled = styled.div<{ border?: string }>`
  width: 100%;
  border: ${({ border }) => border} ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  p {
    margin: 0.5rem 0;
  }
`;
interface ICard {
  onClick?: () => void;
  name: string;
  cost?: number;
  border? : string,
  cardPilih? : number,
  id? : number
}
const Card: React.FC<ICard> = ({ onClick, cost, name, border, cardPilih, id }) => {
  return (
    <CardStyled border={border} onClick={onClick}>
      <div>
        <p>{name}</p>
        <p>{cost && formatCurrency(cost)}</p>
      </div>
      {
        cardPilih === id && <BsCheck2 color="#FF8A00"/>
      }
    </CardStyled>
  );
};

export default Card;
