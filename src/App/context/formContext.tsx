/* eslint-disable no-unused-vars */
import * as React from "react";

interface IFormContex {
  isEmail: string;
  isPhone: string;
  isDropshipName: string;
  isDropshipPhone: string;
  isAddress: string;
  validateEmail: (isValid: boolean) => void;
  validatePhone: (isValid: boolean) => void;
  validateDropshipName: (isValid: boolean) => void;
  validateDropshipPhone: (isValid: boolean) => void;
  validateAddress: (isValid: boolean) => void;
}
export const FormContex = React.createContext({} as IFormContex);

const FormContextProvider = ({ children }: any) => {
  const [isEmail, setIsEmail] = React.useState("default");
  const validateEmail = (isValid: boolean) => {
    if (isValid) setIsEmail("valid");
    if (!isValid) setIsEmail("invalid");
  };
  const [isPhone, setIsPhone] = React.useState("default");
  const validatePhone = (isValid: boolean) => {
    if (isValid) setIsPhone("valid");
    if (!isValid) setIsPhone("invalid");
  };
  const [isDropshipName, setIsNameDropship] = React.useState("default");
  const validateDropshipName = (isValid: boolean) => {
    if (isValid) setIsNameDropship("valid");
    if (!isValid) setIsNameDropship("invalid");
  };
  const [isDropshipPhone, setIsDropshipPhone] = React.useState("default");
  const validateDropshipPhone = (isValid: boolean) => {
    if (isValid) setIsDropshipPhone("valid");
    if (!isValid) setIsDropshipPhone("invalid");
  };
  const [isAddress, setIsAddress] = React.useState("default");
  const validateAddress = (isValid: boolean) => {
    if (isValid) setIsAddress("valid");
    if (!isValid) setIsAddress("invalid");
  };
  return (
    <FormContex.Provider
      value={{
        isEmail,
        validateEmail,
        isPhone,
        validatePhone,
        isDropshipName,
        validateDropshipName,
        isDropshipPhone,
        validateDropshipPhone,
        isAddress,
        validateAddress,
      }}
    >
      {children}
    </FormContex.Provider>
  );
};

export default FormContextProvider;
