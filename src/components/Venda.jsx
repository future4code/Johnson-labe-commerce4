import React, { Component } from "react";
import Produto from "./Produto";

class Venda extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <div className="home_row">
            <Produto
              id="1"
              titulo="Ônibus espacial SPACE"
              preco={250.79}
              imagem="https://i.mlcdn.com.br/1500x1500/183892700.jpg"
            />
            <Produto
              id="2"
              titulo="Roupa espacial viagem Apollo 11"
              preco={349.99}
              imagem="https://www.jornaljoca.com.br/wp-content/uploads/2015/02/astronauta-apollo11-bdb01.jpg"
            />
          </div>
          <div className="home__row">
            <Produto
              id="3"
              titulo="Camiseta Nasa Branca M"
              preco={199.99}
              imagem="https://img.elo7.com.br/product/zoom/2255380/camiseta-camisa-nasa-exploracao-espacial-liga.jpg"
            />
            <Produto
              id="4"
              titulo="Meteoritos diversos"
              preco={369.19}
              imagem="https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2020/10/meteoritetypes-001.png"
            />
            <Produto
              id="5"
              titulo="Kit Foguete e personagem Toy Store"
              preco={74.25}
              imagem="https://http2.mlstatic.com/D_NQ_NP_652602-MLB41731701299_052020-O.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Venda;
