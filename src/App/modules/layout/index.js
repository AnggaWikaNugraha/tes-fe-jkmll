import React from 'react';
import styled from "styled-components";
import Step from '../../components/step';

const LayoutStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  background-color: #fffae6;
  padding: 50px 30px;
  .wrap-step {
    display: none;
  }
  @media (min-width: 1024px) {
    .wrap-step {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      background-color: #fffae6;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
`;
const ContainerStyled = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  height: 85vh;
  padding-top: 60px;
  padding-left: 30px;
  padding-right: 30px;
`;

function LayoutApp({children}) {
  return (
    <LayoutStyled>
       <div className="wrap-step">
          <Step number={1} title='Delivery'/>
          <Step number={2} title='Payment'/>
          <Step number={3} title='Finish'/>
        </div>
        <ContainerStyled>
          {children}
        </ContainerStyled>
    </LayoutStyled>
  );
}

export default LayoutApp;