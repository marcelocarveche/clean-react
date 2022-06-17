import React from 'react';
import Styles from './spinner-styles.scss'

export const Spinner: React.FC = () => {
  return (
    <div className={Styles.spinner}><div></div><div></div><div></div><div></div></div>
  );
};
