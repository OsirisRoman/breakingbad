import { useState } from 'react';

import Frase from './Componentes/Frase/Frase';

import { ContenedorPrincipal, Boton } from './App.styles';

function App() {
  //State de frases
  const [frase, setFrase] = useState({});

  //Función que consulta la Api en
  const consultarAPI = async () => {
    //La función fetch nos devuelve un promise
    const api = await fetch(
      'http://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );

    const frase = await api.json();

    setFrase(frase[0]);
  };

  return (
    <ContenedorPrincipal>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>;
    </ContenedorPrincipal>
  );
}

export default App;
