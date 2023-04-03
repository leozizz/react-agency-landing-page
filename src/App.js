import React from 'react';
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import WorkExperience from './components/workExperience/work';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WorkExperience />

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
