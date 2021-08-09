import React from "react";
import styled from "styled-components";

const SideBarArea = styled.div`
  border: 1px solid black;
  width: 31vw;
  height: 60vh;
  padding: 0.5em;
  background-color: #fefefe;
  position: absolute;
  top: 10%;
  margin-left: 32%;
  margin-top: 10%;
`;

const Titulo = styled.h2`
  margin: 0.2em 0;
`;

function SideBar(props) {
  return (
    <SideBarArea>
      <Titulo>{props.titulo}</Titulo>
      {props.children}
    </SideBarArea>
  );
}

export default SideBar;
