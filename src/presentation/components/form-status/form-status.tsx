import React from 'react';
import { Spinner } from '../spinner/spinner';
import Style from './form-status.scss'

interface Props {

}
export const FormStatus: React.FC<Props> = () => {

  return (
    <>
      <div className={Style.spinnerWrap}>
        <Spinner />
      </div>
      <div className={Style.errorWrap}>
        <span className={Style.error}>Error</span>
      </div>
    </>
  )
}