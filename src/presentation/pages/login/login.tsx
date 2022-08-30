import {Footer, Input, LoginHeader, Spinner } from '@/presentation/components';
import { logoBase64 } from '@/presentation/components/img';
import React from 'react';
import Styles from './login-styles.scss'

export const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form} action="">
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha"  />
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.spinnerWrap}>
          <Spinner />
        </div>
        <div className={Styles.errorWrap}>
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}