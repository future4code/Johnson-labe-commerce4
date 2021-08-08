import React from "react";
import "./Header.css";

function Header() {
  function clicou() {
    alert("Pagina em construção!");
  }
  return (
    <div className="header">
      <div className="Engloba">
        <img
          className="header_logo"
          src="https://image.flaticon.com/icons/png/512/214/214697.png"
          alt="Logo"
        />
        <div className="nome_marca">
          <h4>FreeRocket Marketplace</h4>
        </div>
      </div>

      <div className="engloba_header">
        <button onClick={clicou}> Entrar </button>

        <img
          className="carrinho_menu"
          src="https://image.flaticon.com/icons/png/512/1192/1192233.png"
          alt="Carrinho"
        />
      </div>
    </div>
  );
}

export default Header;
