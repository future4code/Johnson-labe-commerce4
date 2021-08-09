import React from "react";
import styled from "styled-components";
import Section from "./Components/Section/index";
import SideBar from "./Components/Sidebar/index";
import Carrinho from "./Components/Carrinho";
import IconeCarrinho from "./Resources/icone-carrinho.svg";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Filtro from "./Components/Filtro";
import "./App.css";

const BotaoCarrinho = styled.button`
  position: fixed;
  bottom: 1.3em;
  right: 2.5em;
  border-radius: 50%;
  background-color: white;
  width: 80px;
  height: 80px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
  outline: none;
`;

const ImgBotao = styled.img`
  width: 45px;
  height: 45px;
`;

const listaProdutos = [
  {
    id: 1,
    nomeDoProduto: "Ônibus espacial SPACE",
    urlImagem: "https://i.mlcdn.com.br/1500x1500/183892700.jpg",
    valor: 1500.0,
    quantidade: 1,
  },
  {
    id: 2,
    nomeDoProduto: "Roupa espacial viagem Apollo 11",
    urlImagem:
      "https://www.jornaljoca.com.br/wp-content/uploads/2015/02/astronauta-apollo11-bdb01.jpg",
    valor: 2000.0,
    quantidade: 1,
  },
  {
    id: 3,
    nomeDoProduto: "Camiseta Nasa Branca ",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/2255380/camiseta-camisa-nasa-exploracao-espacial-liga.jpg",
    valor: 3000.0,
    quantidade: 1,
  },
  {
    id: 5,
    nomeDoProduto: "Meteoritos diversos",
    urlImagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Meteorito_Mar%C3%ADlia.jpg/250px-Meteorito_Mar%C3%ADlia.jpg",
    valor: 5000.0,
    quantidade: 1,
  },
  {
    id: 6,
    nomeDoProduto: "Kit Foguete e personagem Toy Store",
    urlImagem:
      "https://http2.mlstatic.com/D_NQ_NP_652602-MLB41731701299_052020-O.jpg",
    valor: 6600.0,
    quantidade: 1,
  },
  {
    id: 8,
    nomeDoProduto: "Arma Espacial",
    urlImagem:
      "https://images-americanas.b2w.io/produtos/01/00/oferta/53127/4/53127496_1GG.jpg",
    valor: 8080.0,
    quantidade: 1,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostraCarrinho: false,
      carrinho: [],
      listaProdutos: listaProdutos,
      filtroMin: null,
      filtroMax: Infinity,
      filtroTexto: "",
      ordem: "",
    };
  }

  // aparece e desaparece carrinho
  mostrarAreaCarrinho = () => {
    if (this.state.mostraCarrinho) {
      this.setState({
        mostraCarrinho: false,
      });
    } else {
      this.setState({
        mostraCarrinho: true,
      });
    }
  };
  handleKeyPress = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'Escape') {
        this.setState({
          mostraCarrinho: false,
        });
      }
    });
  };

  // funcao para adicionar produto no carrinho
  adicionarNoCarrinho = (idProduto) => {
    const novoCarrinho = [...this.state.carrinho];
    const IdProdutoAdicionar = listaProdutos.find(
      (objeto) => objeto.id === idProduto
    );

    if (novoCarrinho.indexOf(IdProdutoAdicionar) > -1) {
      IdProdutoAdicionar.quantidade += 1;
    } else {
      novoCarrinho.push(IdProdutoAdicionar);
    }

    this.setState({
      carrinho: novoCarrinho,
    });
  };

  removerCarrinho = (idProduto) => {
    const novoCarrinho = [...this.state.carrinho];
    const IndexProdutoRemover = this.state.carrinho.findIndex(
      (objeto) => objeto.id === idProduto
    );
    const ProdutoCarrinho = novoCarrinho.find((item) => item.id === idProduto);

    novoCarrinho.splice(IndexProdutoRemover, 1);
    ProdutoCarrinho.quantidade = 1;

    this.setState({
      carrinho: novoCarrinho,
    });
  };

  atualizarFiltroMin = (valorMin) => {
    this.setState({
      filtroMin: valorMin,
    });
  };

  atualizarFiltroMax = (valorMax) => {
    if (valorMax === 0) {
      this.setState({
        filtroMax: Infinity,
      });
    } else {
      this.setState({
        filtroMax: valorMax,
      });
    }
  };

  atualizarFiltroTexto = (valorTexto) => {
    this.setState({
      filtroTexto: valorTexto,
    });
  };

  // funcao para atualizar estado da ordem crescente e decrescente
  atualizarSeletorOrdem = (ordem) => {
    const ordenado = ordem;
    this.setState({ ordem: ordenado });
  };

  // funcao SORT ordenacao por numeros e strings
  ordenaProdutosDaLista = (a, b) => {
    if (this.state.ordem === "crescente") {
      return a.valor - b.valor;
    } else if (this.state.ordem === "decrescente") {
      return b.valor - a.valor;
    }
  };

  filtroListaDeProduto = () => {
    return listaProdutos
      .filter((item) => {
        if (item.valor >= this.state.filtroMin) {
          return true;
        } else {
          return false;
        }
      })
      .filter((item) => {
        if (item.valor <= this.state.filtroMax) {
          return true;
        } else {
          return false;
        }
      })
      .filter((texto) => {
        if (texto.nomeDoProduto.includes(this.state.filtroTexto)) {
          return true;
        } else {
          texto.nomeDoProduto.toUpperCase();
          return false;
        }
      });
  };

  render() {
    const listaFiltrada = this.filtroListaDeProduto();
    const produtosOrdenados = listaFiltrada.sort(this.ordenaProdutosDaLista);

    return (
      <div>
        <Header />
        <Filtro
          atualizarFiltroMin={this.atualizarFiltroMin}
          atualizarFiltroMax={this.atualizarFiltroMax}
          atualizarFiltroTexto={this.atualizarFiltroTexto}
        />
        <Section
          atualizarSeletorOrdem={this.atualizarSeletorOrdem}
          adicionarNoCarrinho={this.adicionarNoCarrinho}
          listaDeProdutos={produtosOrdenados}
        />
        {this.state.mostraCarrinho && (
          <SideBar titulo="Carrinho:">
            <Carrinho
              removerCarrinho={this.removerCarrinho}
              listaCarrinho={this.state.carrinho}
              listaDeProdutos={listaProdutos}
            />
          </SideBar>
        )}
        <BotaoCarrinho
          onClick={this.mostrarAreaCarrinho}
          onKeyPress={this.handleKeyPress}
        >
          <ImgBotao alt="icone" src={IconeCarrinho}></ImgBotao>
        </BotaoCarrinho>
        <Footer />
      </div>
    );
  }
}

export default App;
