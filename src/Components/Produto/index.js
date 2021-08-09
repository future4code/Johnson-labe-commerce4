import React from "react";
import styled from "styled-components";

const Item = styled.div`
  box-shadow: darkgray 2px 2px 12px;
  padding: 8px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0% 8% 0% 8%;
`;

const FotoProduto = styled.img`
  width: 40%;
  height: 65%;
  align-self: center;
`;

const BotaoProduto = styled.button`
  background: #f4f0d3;
  border: none;
  margin-top: 10px;
  border-radius: 14px;

  align-self: center;
  width: 80%;
  color: #111;
  padding: 10px;
  :hover {
    transition: 100ms ease-in;
    transform: scale(1.06);
    cursor: pointer;
    background: #324d5b;
    color: #f4f0d3
  }
`;

const Descricao = styled.p`
  margin: 0;
  margin-top: 10px;
  align-self: center;
  font-size: 0.8rem;
`;

function Produto(props) {
  const enviarId = () => {
    props.adicionarNoCarrinho(props.id);
    alert("Item adicionado ao carrinho!");
  };

  return (
    <Item>
      <FotoProduto src={props.urlImagem} />
      <Descricao>{props.nomeDoProduto}</Descricao>
      <Descricao>R$ {props.valor}</Descricao>
      <BotaoProduto onClick={enviarId}>Adicionar ao Carrinho</BotaoProduto>
    </Item>
  );
}

export default Produto;
