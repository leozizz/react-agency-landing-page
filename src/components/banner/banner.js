import React from "react";
import './banner.css';
import Lottie from 'lottie-react';
import Animation from './139117-app-development.json'

const style = {
    height: 500,
};

const Banner = () => {
    return (
        <div className="banner-container limitar-largura">
            <Lottie
                className="banner-animation"
                animationData={Animation}
                style={style}
            />
            <div className="banner-title">
                <p>Branding / UI / UX / Tecnologia</p>
                <h1>Agência de Branding</h1>
                <h2>e design digital</h2>
            </div>
        </div>
    )
};

export default Banner;