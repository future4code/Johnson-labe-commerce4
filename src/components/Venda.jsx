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
              titulo="Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB"
              preco={2550.79}
              imagem="https://st2.myideasoft.com/idea/bx/06/myassets/products/558/lenovo-chromebook-s330-dizustu-bilgisayar-14-inc-fhd-1920-x-1080-9426-jpg.jpeg?revision=1602941394"
            />
            <Produto
              id="2"
              titulo="Fritadeira Elétrica Sem Óleo - Air Fryer Mondial AF-31 New Pratic 3,5L Preta com Timer 127v"
              preco={349.99}
              imagem="https://images-americanas.b2w.io/produtos/01/00/img/134409/9/134409901_1SZ.jpg"
            />
          </div>
          <div className="home__row">
            <Produto
              id="3"
              titulo="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              preco={199.99}
              imagem="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Produto
              id="4"
              titulo="Cooktop à Gás Itatiaia 4 Bocas 620CT40153 - Bivolt"
              preco={369.19}
              imagem="https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/119768/0/119768076SZ.jpg"
            />
            <Produto
              id="5"
              titulo="Kit Completo Ring Light Com Tripé Dimmer Youtuber Selfie Pro"
              preco={74.25}
              imagem="https://images-americanas.b2w.io/produtos/01/00/img/100057/3/100057333_1SZ.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Venda;
