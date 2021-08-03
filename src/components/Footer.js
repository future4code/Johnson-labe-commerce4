import React from 'react'
import "./Footer.css"

function Footer() {

    const scroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="footer">
            <button onClick={scroll}>Ir para o ínicio</button>


            <div className="footer__container">
                <div className="footer__stuff">


                    <div className="footer__one">
                        <div className="footer__title">
                            <h2>Conheceça-nos</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Carreira</h4>
                            <h4>Blog</h4>
                            <h4>Sobre a Labenu</h4>
                        </div>
                    </div>

                    <div className="footer__two">
                        <div className="footer__title">
                            <h2>Faça dinheiro conosco</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Venda produto na Lab</h4>
                            <h4>Seja nosso afiliado</h4>
                        </div>
                    </div>

                    <div className="footer__three">
                        <div className="footer__title">
                            <h2>Pagamento dos Produtos</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Lab Business Card</h4>
                            <h4>Compras com pontuação</h4>
                            <h4>Sobre a Lab</h4>
                        </div>
                    </div>

                    <div className="footer__four">
                        <div className="footer__title">
                            <h2>Deixe nos ajudar você</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Lab e COVID-19</h4>
                            <h4>Sua conta</h4>
                            <h4>Seus pedidos</h4>
                            <h4>Gerencie seu conteúdo e dispositivos</h4>
                            <h4>Ajuda</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Footer
