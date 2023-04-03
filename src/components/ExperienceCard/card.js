import React from "react";
import './card.css';

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.data}</p>
            <h4>{props.titulo}</h4>
            <p>{props.empresa}</p>
            <p>{props.descricao}</p>
         </div>
    )
};

export default Card;