import React from "react";
import './work.css'

import Card from "../ExperienceCard/card";

const WorkExperience = () => {
    return (
        <section className="experience-container">
            <div className="description">
                <h3>Experiências de Trabalho</h3>
                <p>Há mais de 10 anos no mercado de Branding, Deisgn Gráfico, Criação de Sites e Marketing digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>

            <div className="card-container">
                <Card 
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    />
                
                <Card 
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card 
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
                
            </div>

        </section>
    )
};

export default WorkExperience;