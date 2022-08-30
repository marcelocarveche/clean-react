import React, { memo } from 'react';
import { logoBase64 } from '../img';
import Style from './login-header.scss'

export const LoginHeader:React.FC = React.memo(() => {

  return (
    <header className={Style.header}>
      <img src={logoBase64} />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
})
