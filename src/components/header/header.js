import React from "react";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img className="logo" src="../assets/logo.png" alt="logo"/>
                <button>
                    <img src="../assets/moon.png"/>
                </button>
            </div>
        </header>
    )
}

export default Header;