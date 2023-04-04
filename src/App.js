import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import WorkExperience from './components/WorkExperience/work';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;
