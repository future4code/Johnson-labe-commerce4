import React from 'react'
import "./Header.css"





function Header() {

    return (
        <div className="header">

            {/* <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Logo" /> */}
            <div className="nome_marca">
                <h4>EscolherNome</h4>
            </div>
            <img
                className="carrinho_menu"
                src="https://image.flaticon.com/icons/png/512/46/46297.png" alt="Logo" />


        </div>
    )
}

export default Header