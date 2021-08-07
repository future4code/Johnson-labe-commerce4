import React from 'react'
import "./Header.css"
// import SearchIcon from '@material-ui/icons/Search';






function Header() {
    function clicou ( ) {  
        alert ( 'Pagina em construção!' ) ;
      }
    return (
        <div className="header">
            <div className="Engloba">
            <img
                className="header_logo"
                src="https://img-premium.flaticon.com/png/512/2578/premium/2578890.png?token=exp=1628363404~hmac=9fd843d05683c959f40a7fdb03f2a4f3" alt="Logo" />
            <div className="nome_marca">
                <h4>FreeRocket Marketplace</h4>
            </div>
            </div>
        
            <div className="engloba_header">
            
            <button onClick = {clicou}> login </button> 
            
            <img
                className="carrinho_menu"
                src="https://image.flaticon.com/icons/png/512/3737/3737372.png" alt="Logo" />
            
            </div>

     
            
        </div>
    )
}

export default Header