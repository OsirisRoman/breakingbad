import styled from '@emotion/styled';

export const ContenedorPrincipal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Imagen = styled.img`
  margin-top: 10px;
  @media (max-width: 450px) {
    width: 75%;
  }
`;

export const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 500px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.3s ease;

  :hover {
    cursor: pointer;
    background-size: 350px;
  }
`;
