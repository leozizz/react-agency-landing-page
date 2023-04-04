import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import WorkExperience from './components/WorkExperience/work';
import Footer from './components/Footer/footer';

function App() {

  const lightMode = "light-mode"
  const darkMode = "dark-mode"

  const [colorMode, setNewMode] = useState(true)

  const changeMode = () => {
      setNewMode(!colorMode)
  }

  return (
    <div id='App' className={colorMode ? lightMode : darkMode}>
      <Header changeStyle={changeMode} changeIcon={colorMode}/>
      <Banner />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;
