import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container limitar-largura">
                <img className="logo" src='./assets/logo.png' alt="logo"/>
                <p>
                Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
                </p>
                <div className="social">
                    <img src='./assets/facebook.png' alt="logo"/>
                    <img src='./assets/twitter.png' alt="logo"/>
                    <img src='./assets/linkedin.png' alt="logo"/>
                    <img src='./assets/dribble.png' alt="logo"/>
                    <img src='./assets/behance.png' alt="logo"/>
                    <img src='./assets/google-plus.png' alt="logo"/>
                </div>
                <p className="copy">
                    Copyright 2023 &copy; <a href="https://github.com/leozizz" target="_blank">leozizz</a>
                </p>
            </div>
        </footer>
    )
};

export default Footer;