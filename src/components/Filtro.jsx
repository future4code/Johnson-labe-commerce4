import React, { Component } from "react";
import styled from "styled-components";

const FiltroContainer = styled.div`
  margin: 0;
  box-shadow: darkgray 2px 2px 12px;
  padding: 8px;
`;

const InputsContainer = styled.div`
  display: grid;
  gap: 12px;
  padding: 12px;
`;

class Filtro extends Component {
  render() {
    return (
      <FiltroContainer>
        <h3>Filtros</h3>
        <InputsContainer>
          <input type="number" placeholder="Valor Mínimo" />
          <input type="number" placeholder="Valor Máximo" />
          <input type="text" placeholder="Nome do produto" />
        </InputsContainer>
      </FiltroContainer>
    );
  }
}

export default Filtro;
