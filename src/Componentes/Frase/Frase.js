import React from 'react';
import PropTypes from 'prop-types';

import { ContenedorFrase } from './Frase.styles';

const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>-{frase.author}</p>
    </ContenedorFrase>
  );
};

Frase.propTypes = {
  frase: PropTypes.object.isRequired,
};

export default Frase;
