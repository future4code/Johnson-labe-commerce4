import React, { Component } from "react";
import styled from "styled-components";
import "./Produto.css";

const ProdutoContainer = styled.div`
  box-shadow: darkgray 2px 2px 12px;
  padding: 0 8px;
`;

const ProdutosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`;

const ProdutoCard = styled.div`
  box-shadow: darkgray 2px 2px 1px;
  border-radius: 20px;
`;

const ImagemProduto = styled.img`
  width: 20vw;
  height: 40vh;
`;

const InfoProduto = styled.div`
  padding: 8px;
  text-align: center;
`;

class Produto extends Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Ônibus espacial SPACE",
        value: 129.99,
        imagemUrl: "https://i.mlcdn.com.br/1500x1500/183892700.jpg",
      },
      {
        id: 2,
        name: "Roupa espacial viagem Apollo 11",
        value: 129.99,
        imagemUrl:
          "https://www.jornaljoca.com.br/wp-content/uploads/2015/02/astronauta-apollo11-bdb01.jpg",
      },
      {
        id: 3,
        name: "Camiseta Nasa Branca M",
        value: 235.55,
        imagemUrl:
          "https://img.elo7.com.br/product/zoom/2255380/camiseta-camisa-nasa-exploracao-espacial-liga.jpg",
      },
      {
        id: 4,
        name: "Meteoritos diversos",
        value: 1275.25,
        imagemUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Meteorito_Mar%C3%ADlia.jpg/250px-Meteorito_Mar%C3%ADlia.jpg",
      },
      {
        id: 5,
        name: "Kit Foguete e personagem Toy Store",
        value: 74.69,
        imagemUrl:
          "https://http2.mlstatic.com/D_NQ_NP_652602-MLB41731701299_052020-O.jpg",
      },
      {
        id: 6,
        name: "Arma Espacial",
        value: 129.99,
        imagemUrl:
          "https://images-americanas.b2w.io/produtos/01/00/oferta/53127/4/53127496_1GG.jpg",
      },
    ],
  };

  render() {
    // Gerar os componentes na tela passando pelos objetos
    const listaComponentes = this.state.produtos.map((item) => {
      return (
        <ProdutoCard>
          <ImagemProduto src={item.imagemUrl} alt={item.name} />
          <InfoProduto>
            <p>{item.name}</p>
            <p>R$: {item.value}</p>
            <button onClick={() => this.props.onClickAdicionarCarrinho(item)}>
              Adicionar ao carrinho
            </button>
          </InfoProduto>
        </ProdutoCard>
      );
    });

    return (
      <ProdutoContainer>
        <ProdutosHeader>
          <h3>Quantidade de produtos: {listaComponentes.length}</h3>
          <div>
            <label>Ordenação: </label>
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </div>
        </ProdutosHeader>
        <ProdutosGrid>{listaComponentes}</ProdutosGrid>
      </ProdutoContainer>
    );
  }
}

export default Produto;
