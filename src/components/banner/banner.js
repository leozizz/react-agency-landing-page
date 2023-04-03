import React from "react";
import './banner.css';
import Lottie from 'lottie-react';
import Animation from './139117-app-development.json'

const style = {
    height: 500,
};

const Banner = () => {
    return (
        <div className="banner-container">
            <Lottie
                animationData={Animation}
                style={style}
            />
            <div>
                <p>Brading / UI / UX / Tecnologia</p>
                <h1>Agência de Brandind</h1>
                <h2>e design digital</h2>
            </div>
        </div>
    )
};

export default Banner;