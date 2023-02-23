import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";

interface IStep {
  number: number,
  title: string,
  isActive: boolean,
  setSteps: Function,
  path: string,
  steps: any,
  setView: any,
}

interface IStepStyled {
  isActive?: boolean
}

const Step = ({steps, number, title, isActive, setSteps, path, setView}:IStep) => {
  const acStep = () => {
    const newState = steps.map((res: any) => {
      if (number >= res.number) {
        return {
          ...res,
          isActive: true
        }
      }
      return {
        ...res,
        isActive: false,
      }
    })
    setSteps(newState)
    setView(number)
  }
  return (
    <StepStyled isActive={isActive}>
      <p onClick={acStep}>{number}</p>
      <h3>{title}</h3>
      <IoIosArrowForward color="#FF8A00" />
    </StepStyled>
  );
};

const StepStyled = styled.div<IStepStyled>`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 0.5rem;
    color: #FF8A00;
    margin-right: 1rem;
  }
  p {
    cursor: pointer;
    background-color: ${({isActive} : any) => isActive ? '#FF8A00' : '#f2c490'};
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
