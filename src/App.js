import { ContenedorPrincipal, Boton } from './App.styles';

function App() {
  //Función que consulta la Api en
  const consultarAPI = async () => {
    //La función fetch nos devuelve un promise
    const api = await fetch(
      'http://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );

    const frase = await api.json();

    console.log(frase[0]);
  };

  return (
    <ContenedorPrincipal>
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>;
    </ContenedorPrincipal>
  );
}

export default App;
