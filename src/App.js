import React from 'react';
import browse from './pages/browse';
import details from './pages/details';
import Home from './pages/Home';
import profile from './pages/profile';
import streams from './pages/streams';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header'; 
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import ShowFirebase from './Components/ShowFirebase';


function App() {
    return (
      <div>
      <MainPage />
      {/* <ShowFirebase /> */}
      {/* <Header />
      <Home/>
      <Footer /> */}
      </div> 
    );
}

export default App