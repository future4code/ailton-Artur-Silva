import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post
        nomeUsuario={"Artur"}
        fotoUsuario={"https://picsum.photos/id/1/200/150"}
        fotoPost={"https://picsum.photos/id/237/200/150"}
      />
      <Post
        nomeUsuario={"Enzo"}
        fotoUsuario={"https://picsum.photos/id/1003/50/50"}
        fotoPost={"https://picsum.photos/seed/picsum/200/150"}
      />
    </MainContainer>
  );
}

export default App;
