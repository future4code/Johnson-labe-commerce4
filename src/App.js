import React from "react";
import Header from "./components/Header";
import Filtro from "./components/Filtro";
import Produto from "./components/Produto";
import Carrinho from "./components/Carrinho";
import Footer from "./components/Footer";

import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 4px;
`;

class App extends React.Component {
  state = {
    carrinho: [],
  };

  //Ação para adicionar no carrinho
  onClickAdicionarCarrinho = (produto) => {
    // Criar uma cópia dos itens do carrinho
    const novoCarrinho = [...this.state.carrinho];
    novoCarrinho.push(produto);
    this.setState({ carrinho: novoCarrinho });
  };

  render() {
    return (
      <div>
        <Header />
        <AppContainer>
          <Filtro />
          <Produto onClickAdicionarCarrinho={this.onClickAdicionarCarrinho}/>
          <Carrinho produtosCarrinho={this.state.carrinho} />
        </AppContainer>

        <Footer />
      </div>
    );
  }
}

export default App;
