import { useState, useEffect } from 'react';

import Frase from './Componentes/Frase/Frase';

import ReactLogo from './logo.svg';

import { Imagen, ContenedorPrincipal, Boton } from './App.styles';

function App() {
  //State de frases
  const [frase, setFrase] = useState({});

  //Función que consulta la Api en
  const consultarAPI = async () => {
    //La función fetch nos devuelve un promise
    const api = await fetch('https://breakingbadapi.com/api/quote/random');

    const frase = await api.json();

    setFrase(frase[0]);
  };

  //Cargar una frase cuando se renderiza la página
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <ContenedorPrincipal>
      <Imagen src={ReactLogo} />
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </ContenedorPrincipal>
  );
}

export default App;
