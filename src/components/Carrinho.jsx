import React, { Component } from "react";
import styled from "styled-components";

const CarrinhoContainer = styled.div`
  box-shadow: darkgray 2px 2px 12px;
  padding: 8px;
`;

const ItemCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icone = styled.img`
  width: 1vw;
`;

class Carrinho extends Component {
  render() {
    return (
      <CarrinhoContainer>
        <h3>Carrinho</h3>
        <div>
          {this.props.produtosCarrinho.map((item) => {
            return (
              <ItemCarrinho>
                <p>
                  1x - {item.name}
                </p>
                <button>
                  <Icone
                    src="https://image.flaticon.com/icons/png/512/84/84435.png"
                    alt="Deletar"
                  />
                </button>
              </ItemCarrinho>
            );
          })}
        </div>
        <h4>Valor total: R$ {} x</h4>
      </CarrinhoContainer>
    );
  }
}

export default Carrinho;
