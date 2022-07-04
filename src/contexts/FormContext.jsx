import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [values, setValues] = useState({
    name: "",
    birthDate: "",
    user: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPasswordNumberValid, setIsPasswordNumberValid] = useState(false);
  const [isPasswordSpecialValid, setIsPasswordSpecialValid] = useState(false);

  const handleNameChange = (event) => {
    setValues({ ...values, name: event.target.value });
    setIsValid(false);
  };

  const handleDateChange = (event) => {
    setValues({ ...values, birthDate: event.target.value });
    setIsValid(false);
  };

  const handleUserChange = (event) => {
    setValues({ ...values, user: event.target.value });
    setIsValid(false);
    setIsUserValid(true);
  };

  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
    setIsValid(false);
  };

  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
    setIsValid(false);
    setIsPasswordNumberValid(false);
    setIsPasswordSpecialValid(false);
  };

  const verifyPassword = () => {
    if (
      values.password.indexOf("1") !== -1 ||
      values.password.indexOf("2") !== -1 ||
      values.password.indexOf("3") !== -1 ||
      values.password.indexOf("4") !== -1 ||
      values.password.indexOf("5") !== -1 ||
      values.password.indexOf("6") !== -1 ||
      values.password.indexOf("7") !== -1 ||
      values.password.indexOf("8") !== -1 ||
      values.password.indexOf("9") !== -1 ||
      values.password.indexOf("0") !== -1
    ) {
      setIsPasswordNumberValid(true);
    }

    if (
      values.password.indexOf("!") !== -1 ||
      values.password.indexOf("@") !== -1 ||
      values.password.indexOf("#") !== -1 ||
      values.password.indexOf("$") !== -1 ||
      values.password.indexOf("%") !== -1 ||
      values.password.indexOf("&") !== -1 ||
      values.password.indexOf("*") !== -1 ||
      values.password.indexOf("(") !== -1 ||
      values.password.indexOf(")") !== -1
    ) {
      setIsPasswordSpecialValid(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    verifyPassword();

    if (
      values.name &&
      values.birthDate &&
      values.user &&
      values.email &&
      values.password
    ) {
      setIsValid(true);
    }

    if (
      values.user === "cloud" ||
      values.user === "lx2018" ||
      values.user === "kiwi"
    ) {
      setIsUserValid(false);
    }

    setIsSubmitted(true);
  };
  return (
    <FormContext.Provider
      value={{
        values,
        isSubmitted,
        isValid,
        isUserValid,
        isPasswordNumberValid,
        isPasswordSpecialValid,
        handleNameChange,
        handleDateChange,
        handleUserChange,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
