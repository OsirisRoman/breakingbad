import React from 'react';

import { ContenedorFrase } from './Frase.styles';

const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>-{frase.author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
