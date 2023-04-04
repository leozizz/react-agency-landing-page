import React from "react";
import './header.css';

const Header = (props) => {

    const moon = "../assets/moon.png"
    const sun = "../assets/sun.png"

    return (
        <header className="header">
            <div className="header-container limitar-largura">
                <img className="logo" src="../assets/logo.png" alt="logo"/>
                <button onClick={props.changeStyle}>
                    <img src={props.changeIcon ? moon : sun} alt="icone"/>
                </button>
            </div>
        </header>
    )
}

export default Header;