import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  margin: 0em 3em;
`

const ContadorProdutos = styled.p `
  margin: 0.5em 1em;
  font-size: 13pt;
  
`





function HeaderProdutos(props) {
  
  const seletorOrdem = (event) => {
    const ordem = (event.target.value)
    props.atualizarSeletorOrdem(ordem)
  }

  
  return (
      <Container>
        <ContadorProdutos>Quantidade de Produtos: {props.listaDeProdutos.length}</ContadorProdutos>
        <select onChange={seletorOrdem}>
            <option value='crescente'>Preço: Crescente</option>
            <option value='decrescente'>Preço: Decrescente</option>
        </select>
      </Container>
  );
}



export default HeaderProdutos;