import { ContenedorPrincipal, Boton } from './App.styles';

function App() {
  //Función que consulta la Api en
  const consultarAPI = () => {
    console.log('Consultando...');
  };

  return (
    <ContenedorPrincipal>
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>;
    </ContenedorPrincipal>
  );
}

export default App;
