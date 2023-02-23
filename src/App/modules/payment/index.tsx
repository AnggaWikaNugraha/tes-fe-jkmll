/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from "react";

import Back from "../../components/Back";
import Card from "../../components/card";
import HeadingStyled from "../../components/Heading";
import Summary from "../../components/summary";
import { SummaryContext } from "../../context/summaryContext";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Type from "../../redux/type";

const PaymentStyled = styled.form`
  .payment {
    width: 100%;
  }
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    .grid {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;

const listshipments = [
  {
    id: 1,
    name: "GO-SEND",
    estimate: "today",
    cost: 15000,
  },
  {
    id: 2,
    name: "JNE",
    estimate: "2Days",
    cost: 9000,
  },
  {
    id: 3,
    name: "Personal Courier",
    estimate: "1Days",
    cost: 29000,
  },
];
const wallets = [
  {
    id: 1,
    name: "e-Wallet",
  },
  {
    id: 2,
    name: "Bank Transfer",
  },
  {
    id: 3,
    name: "Virtual Account",
  },
];
const Payment = ({ setSteps, steps}: any) => {
  const [cardPilih, setcardPilih] = React.useState(0)
  const [walletPilih, setwalletPilih] = React.useState(0) 
  const y = JSON.parse(localStorage.getItem('setChecked') || 'false') ;
  const dispatch = useDispatch()
  const { setShipment, setFeeDropship, shipment, paymentMethod, setPaymentMethod } = React.useContext(SummaryContext);
  const addFeeDropship = () => {
    if (y) setFeeDropship(5900);
    if (!y) setFeeDropship(0);
  };
  React.useEffect(() => {
    addFeeDropship();
  }, [y]);
  const history = useHistory();
  const onSubmit = () => {
    const newState = steps.map((res: any) => {
      if (3 >= res.number) {
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
    localStorage.setItem("setSteps", JSON.stringify(newState));
    dispatch({
      type: Type.SET_VIEW_FINISH
    })
  };
  return (
    <PaymentStyled>
      <section className="payment">
        <Back />
        <HeadingStyled as="h1" marginY="1rem" size="36px">
          Shipment
        </HeadingStyled>
        <div className="grid">
          {listshipments.map((listshipment, i) => (
            <Card
              id={listshipment.id}
              cardPilih={cardPilih}
              border={cardPilih === listshipment.id ? '1px solid #1BD97B' : '1px solid #ccc'}
              key={listshipment.id}
              cost={listshipment.cost}
              name={listshipment.name}
              onClick={() =>{
                  setcardPilih(listshipment.id)
                  setShipment({
                    name: listshipment.name,
                    cost: listshipment.cost,
                    estimate: listshipment.estimate,
                  })
                }
              }
            />
          ))}
        </div>
        <HeadingStyled as="h1" marginY="1rem" size="36px">
          Payment
        </HeadingStyled>
        <div className="grid">
          {wallets.map((wallet) => (
            <Card
              border={walletPilih === wallet.id ? '1px solid #1BD97B' : '1px solid #ccc'}
              id={wallet.id}
              cardPilih={walletPilih} 
              key={wallet.id} 
              name={wallet.name} 
              onClick={() => {
                setwalletPilih(wallet.id)
                setPaymentMethod(wallet.name)
              }
            }
          />
          ))}
        </div>
      </section>
      <section className="summary">
        <Summary 
        button={`Pay With ${paymentMethod}`} 
        onSubmit={onSubmit} />
      </section>
    </PaymentStyled>
  );
};

export default Payment;
