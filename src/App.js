import React from 'react';
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div>
        <h3>Experiências de Trabalho</h3>
        <p>Há mais de 10 anos no mercado de Branding, Deisgn Gráfico, Criação de Sites e Marketing digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>

        <div>
          <p>Data</p>
          <h4>Titulo</h4>
          <p>Empresa</p>
          <p>Descrição</p>
        </div>
        
        <div>
          <p>Data</p>
          <h4>Titulo</h4>
          <p>Empresa</p>
          <p>Descrição</p>
        </div>
        
        <div>
          <p>Data</p>
          <h4>Titulo</h4>
          <p>Empresa</p>
          <p>Descrição</p>
        </div>
      </div>

      <footer>
        <p>M</p>
        <p>
          Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
        </p>
        <p>Icone</p>
        <p>Icone</p>
        <p>Icone</p>
        <p>Icone</p>
        <p>Icone</p>
        <p>Icone</p>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

export default App;
