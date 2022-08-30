import React, { memo } from 'react';
import { logoBase64 } from '../img';
import Style from './footer.scss'

export const Footer:React.FC = React.memo(() => {

  return (
    <footer className={Style.footer}/>
  )
})
