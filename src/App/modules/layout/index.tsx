import React from 'react';
import styled from "styled-components";
import Step from '../../components/step';
import Delivery from '../delivery';
import Finish from '../finish';
import Payment from '../payment';

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
  /* padding-top: 60px; */
  padding-left: 30px;
  padding-right: 30px;
`;

function LayoutApp({children}: any) {

  const [view, setView] = React.useState(1);

  const [steps, setSteps] = React.useState([
    {
      number: 1,
      title: 'Delivery',
      isActive: true,
      path: '/',
    },
    {
      number: 2,
      title: 'Payment',
      isActive: false,
      path: '/payment'
    },
    {
      number: 3,
      title: 'Finish',
      isActive: false,
      path: '/finsh'
    }
  ])

  console.log(steps)

  return (
    <LayoutStyled>
       <div className="wrap-step">
        {
          steps.map((res) => <>
            <Step setView={setView} steps={steps} path={res.path} setSteps={setSteps} isActive={res.isActive} number={res.number} title={res.title}/>
          </>)
        }
        </div>
        <ContainerStyled>
          {
            view === 1 && <Delivery/>
          }
          {
            view === 2 && <Payment/>
          }
          {
            view === 3 && <Finish/>
          }
          {children}
        </ContainerStyled>
    </LayoutStyled>
  );
}

export default LayoutApp;