import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

interface IStep {
  number: number,
  title: string
}

const Step = ({number, title}:IStep) => {
  return (
    <StepStyled>
      <p>{number}</p>
      <h3>{title}</h3>
      <IoIosArrowForward color="#FF8A00" />
    </StepStyled>
  );
};

const StepStyled = styled.div`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 0.5rem;
    color: #FF8A00;
    margin-right: 1rem;
  }
  .active {
    background-color: #ff8a00;
  }
  p {
    background: #f2c490;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;
  }
  @media (min-width: 1024px) {
    margin: 0 1rem;
  }
`;
export default Step;
