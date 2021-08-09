import React from 'react';
import styled from 'styled-components';





const ItemCarrinho = styled.p `
    border-bottom: 1px dashed black;
    list-style: none;
    padding: 0.5em;
    
`

const BotaoRemover = styled.button `
    :hover{
        color: red;
    }
    padding: 0.2em;
    margin: 8px;
`




function Carrinho(props) {
    let soma  = 0
    for(let item of props.listaCarrinho) {
        soma = soma + (item.valor * item.quantidade)
    }
    
    return (
    <div>
        {props.listaCarrinho.map(item => {
            const enviarId = () => {
                props.removerCarrinho(item.id)
            }
            return <ItemCarrinho>{item.quantidade}x {item.nomeDoProduto} 
            <BotaoRemover onClick={enviarId}> X</BotaoRemover></ItemCarrinho>
        })}
        <strong>Total: R${soma}</strong>
    </div>
  );
}



export default Carrinho;