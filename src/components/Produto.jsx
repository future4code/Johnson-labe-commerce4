import React from "react";
import './Produto.css'

function Produto({ id, titulo, preco, imagem }) {
    
  const adicionarCarrinho = () => {
    // Criar função ainda
  };

  return (
    <div className="produto">
      <div className="produto-info">
        <p>{titulo}</p>
        <p className="produto-preco">
          <small>R$: </small>
          <strong>{preco}</strong>
        </p>
      </div>
      <img src={imagem} alt="" />
      <button onClick={adicionarCarrinho}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Produto
