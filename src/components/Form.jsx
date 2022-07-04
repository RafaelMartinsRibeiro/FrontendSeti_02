import { useContext, useState } from "react";
import { FormContext } from "../contexts/FormContext";
import styles from "../styles/components/Form.module.css";

export function Form() {
  const {
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
  } = useContext(FormContext);

  return (
    <div className={styles.formContainer}>
      <header>
        <span>Cadastro de jogadores</span>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          name="name"
          placeholder="Nome completo"
          value={values.name}
        />
        {isSubmitted && !values.name ? <span>Digite seu Nome!</span> : null}

        <input
          type="date"
          onChange={handleDateChange}
          name="date"
          placeholder="Data de nascimento"
          value={values.birthDate}
        />
        {isSubmitted && !values.birthDate ? (
          <span>Digite sua data de nascimento!</span>
        ) : null}

        <input
          onChange={handleUserChange}
          name="user"
          placeholder="Usuário"
          value={values.user}
        />
        {isSubmitted && !values.user ? <span>Digite seu Usuário</span> : null}
        {isSubmitted && !isUserValid ? (
          <span>Escolha outro nome de Usuário!</span>
        ) : null}

        <input
          onChange={handleEmailChange}
          name="email"
          placeholder="Email"
          value={values.email}
        />
        {isSubmitted && !values.email ? <span>Digite seu Email!</span> : null}

        <input
          type="password"
          onChange={handlePasswordChange}
          name="password"
          placeholder="Senha"
          value={values.password}
        />
        {isSubmitted && !values.password ? (
          <span>Digite sua Senha!</span>
        ) : null}
        {isSubmitted && values.password && values.password.length < 6 ? (
          <span>Sua senha precisa ter pelo menos 6 caracteres!</span>
        ) : null}
        {isSubmitted &&
        values.password &&
        (!isPasswordNumberValid || !isPasswordSpecialValid) ? (
          <span>
            Sua senha precisa ter pelo menos um caractere especial{" "}
            {"'!@#$%&*()'"} e um número!
          </span>
        ) : null}

        <button className={styles.submitButton} type="submit">
          Me inscrever
        </button>
      </form>

      {isSubmitted &&
      isValid &&
      isPasswordNumberValid &&
      isPasswordSpecialValid &&
      isUserValid ? (
        <div className={styles.success}>Você foi cadastrado com sucesso!</div>
      ) : null}
    </div>
  );
}
