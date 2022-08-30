import React from 'react';
import Style from './input.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {

}

export const Input: React.FC<Props> = ({...props}) => {

  return (
    <div className={Style.inputWrap}>
      <input {...props}  />
      <span className={Style.status}>🔴</span>
    </div>
  )
}