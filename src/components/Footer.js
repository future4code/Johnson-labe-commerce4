import React from 'react'
import "./Footer.css"

function Footer() {

    const gerarAlert = () => {
        alert(' \uD83D\uDEA7... Páginas em manutenção ...\uD83D\uDEA7 ')
    }

    const irInicio = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="footer">
            <button onClick={irInicio}>Ir para o ínicio</button>


            <div className="footer__container">
                <div className="footer__stuff">


                    <div className="footer__one">
                        <div className="footer__title">
                            <h2 onClick={gerarAlert}>Conheceça-nos</h2>
                        </div>
                        <div className="footer__text">
                            <h4 onClick={gerarAlert}>Carreira</h4>
                            <h4 onClick={gerarAlert}>Blog</h4>
                            <h4><a href="http://www.labenu.com.br" target="_blank">Sobre a Labenu</a></h4>
                        </div>
                    </div>

                    <div className="footer__two">
                        <div className="footer__title">
                            <h2 onClick={gerarAlert}>Faça dinheiro conosco</h2>
                        </div>
                        <div className="footer__text">
                            <h4 onClick={gerarAlert}>Venda produto na Lab</h4>
                            <h4 onClick={gerarAlert}>Seja nosso afiliado</h4>
                        </div>
                    </div>

                    <div className="footer__three">
                        <div className="footer__title">
                            <h2 onClick={gerarAlert}>Pagamento dos Produtos</h2>
                        </div>
                        <div className="footer__text">
                            <h4 onClick={gerarAlert}>Lab Business Card</h4>
                            <h4 onClick={gerarAlert}>Compras com pontuação</h4>
                            <h4 onClick={gerarAlert}>Sobre a Lab</h4>
                        </div>
                    </div>

                    <div className="footer__four">
                        <div className="footer__title">
                            <h2 onClick={gerarAlert}>Deixe nos ajudar você</h2>
                        </div>
                        <div className="footer__text">
                            <h4 onClick={gerarAlert}>Lab e COVID-19</h4>
                            <h4 onClick={gerarAlert}>Sua conta</h4>
                            <h4 onClick={gerarAlert}>Seus pedidos</h4>
                            <h4 onClick={gerarAlert}>Ajuda</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Footer
