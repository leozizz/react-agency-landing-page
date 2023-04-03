import React from "react";
import './work.css'

const WorkExperience = () => {
    return (
        <section className="experience-container">
            <div className="description">
                <h3>Experiências de Trabalho</h3>
                <p>Há mais de 10 anos no mercado de Branding, Deisgn Gráfico, Criação de Sites e Marketing digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>

            <div className="card-container">
                <div className="card">
                    <p>JUNHO 2012 - 2016</p>
                    <h4>Web Designer</h4>
                    <p>Pied Piper StartUp.</p>
                    <p>
                        Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores

                    </p>
                </div>
                
                <div className="card">
                    <p>AGOSTO 2016 - 2019</p>
                    <h4>Product Designer</h4>
                    <p>E Corp.</p>
                    <p>
                        Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra

                    </p>
                </div>
                
                <div className="card">
                    <p>FEVEREIRO 2019 - 2021</p>
                    <h4>Digital Consulting</h4>
                    <p>Arasaka Inc.</p>
                    <p>
                        Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução
                    </p>
                </div>
            </div>

        </section>
    )
};

export default WorkExperience;