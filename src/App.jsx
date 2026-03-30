import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => {
  return (
    <>
      <h1>Простой калькулятор суммы на React</h1>

      <Sum a={2} b={3} />
      <Sum a={-5} b={5} />
      <Sum a={10} b={0} />
      <Sum a={0} b={5} />
      <Sum a={0} b={0} />

      {/* Можно добавить ещё примеры */}
      <Sum a={42} b={58} />
    </>
  );
};
