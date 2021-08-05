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
                src="https://image.flaticon.com/icons/png/512/4342/4342171.png" alt="Logo" />
            <div className="nome_marca">
                <h4>EscolherNome</h4>
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