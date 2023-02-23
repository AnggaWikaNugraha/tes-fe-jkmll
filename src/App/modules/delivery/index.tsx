/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DeliveryStyled } from "./styles";
import { FormContex } from "../../context/formContext";
import { IFormInputs } from "./type";
import { SummaryContext } from "../../context/summaryContext";
import { useHistory } from "react-router-dom";
import Back from "../../components/Back";
import HeadingStyled from "../../components/Heading";
import Summary from "../../components/summary";
import { useDispatch } from "react-redux";
import Type from "../../redux/type";

const Delivery = ({ setSteps, steps}: any) => {
  const dispatch = useDispatch()
  const {
    isEmail,
    validateEmail,
    isPhone,
    validatePhone,
    isDropshipPhone,
    validateDropshipPhone,
    isDropshipName,
    validateDropshipName,
    isAddress,
    validateAddress,
  } = React.useContext(FormContex);
  const x = JSON.parse(localStorage.getItem('data') || '{}') ;
  const y = JSON.parse(localStorage.getItem('setChecked') || '{}') ;
  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInputs>(
    {
    defaultValues : {
      email : x.email,
      phone: x.phone,
      address: x.address,
      dropShipperName: x?.dropShipperName,
      dropshipperphone: x?.dropshipperphone,
    }
  }
  );
  const { setFeeDropship } = React.useContext(SummaryContext);
  const [checked, setChecked] = React.useState(y ? y : false);
  const [lengthText, setLengtexh] = React.useState(120);
  const addFeeDropship = () => {
    if (checked) setFeeDropship(5900);
    if (!checked) setFeeDropship(0);
  };
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    const newState = steps.map((res: any) => {
      if (2 >= res.number) {
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
      type: Type.SET_VIEW_PAYMENT
    })
  };
  React.useEffect(() => {
    addFeeDropship();
  }, [checked]);
  return (
    <DeliveryStyled>
      <section className="delivery">
        <Back />
        <section className="header">
          <HeadingStyled as="h1" marginY="1rem" size="36px">
            Delivery details
          </HeadingStyled>
          <div className="is-dropship">
            <input
              defaultChecked={y} 
              onChange={() => {
                localStorage.setItem('setChecked', JSON.stringify(!checked))
                setChecked(!checked)
              }} 
              type="checkbox" />
            <span>send as dropshipper</span>
          </div>
        </section>
        <section className="form">
          <form>
            <div className="left">
              <section>
                <div 
                className={`form-control ${isEmail}`}
                >
                  <label>
                    <input
                      autoComplete="off"
                      placeholder="email"
                      type="text"
                      {...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                          message: "Invalid email",
                        },
                      })}
                      onKeyUp={async () => {
                        const isValid = await trigger("email");
                        validateEmail(isValid);
                      }}
                    />
                    <span>Email</span>
                  </label>
                </div>
              </section>
              <section>
                <div 
                className={`form-control ${isPhone}`}
                >
                  <label>
                    <input
                      autoComplete="off"
                      placeholder="phone number"
                      type="number"
                      {...register("phone", {
                        required: "Phone is Required",
                        minLength: 6,
                        maxLength: 20,
                        pattern: {
                          value: /^[+0-9]*$/g,
                          // value: /go*/,
                          message: "Invalid Phone Number",
                        },
                      })}
                      onKeyUp={async () => {
                        const isValid = await trigger("phone");
                        validatePhone(isValid);
                      }}
                    />
                    <span>Phone Number</span>
                  </label>
                </div>
              </section>
              <section>
                <div 
                className={`form-control ${isAddress}`}
                >
                  <label>
                    <textarea
                      autoComplete="off"
                      placeholder="Delivery Address"
                      {...register("address", {
                        required: "Delivery Address is Required",
                        maxLength: {
                          value: 120,
                          message: "maximun allowed lengthis 120",
                        },
                        pattern: {
                          value: /[a-z0-9]/gi,
                          // value: /go*/,
                          message: "Invalid Delivery Address",
                        },
                      })}
                      onKeyUp={async () => {
                        const isValid = await trigger("address");
                        setLengtexh(120 - getValues("address").length);
                        validateAddress(isValid);
                      }}
                    />
                    <span>Delivery Address</span>
                    <p 
                    className="length-address"> characters left {lengthText}
                    </p>
                  </label>
                </div>
              </section>
            </div>
            <div className="is-dropship-mobile">
              <input 
                onChange={() => setChecked(!checked)} type="checkbox" 
              />
              <span>send as dropshipper</span>
            </div>
            <div className="righ">
              <div>
                <div 
                className={`form-control ${isDropshipName}`}
                >
                  <label>
                    <input
                      autoComplete="off"
                      disabled={!checked}
                      placeholder="Dropshipper Name"
                      type="text"
                      {...register("dropShipperName", {
                        required: "Dropshipper Name is Required",
                        disabled: !checked,
                      })}
                      onKeyUp={async () => {
                        const isValid = await trigger("dropShipperName");
                        validateDropshipName(isValid);
                      }}
                    />
                    <span>Dropshipper Name</span>
                  </label>
                </div>
              </div>
              <div>
                <div 
                className={`form-control ${isDropshipPhone}`}
                >
                  <label>
                    <input
                      autoComplete="off"
                      disabled={!checked}
                      placeholder="Dropshipper phone number"
                      type="number"
                      {...register("dropshipperphone", {
                        required: "Dropshipper Phone is Required",
                        disabled: !checked,
                        minLength: 6,
                        maxLength: 20,
                        pattern: {
                          value: /^[+0-9]*$/g,
                          message: "Dropshipper Phone Invalid",
                        },
                      })}
                      onKeyUp={async () => {
                        const isValid = await trigger("dropshipperphone");
                        validateDropshipPhone(isValid);
                      }}
                    />
                    <span>Phone Number Dropshipper</span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
      <section className="summary">
        <Summary button="Continue to payment" onSubmit={handleSubmit(onSubmit)} />
      </section>
    </DeliveryStyled>
  );
};

export default Delivery;
