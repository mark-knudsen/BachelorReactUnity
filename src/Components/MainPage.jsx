import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ShowFirebase from './ShowFirebase';

const MainPage = ({ onStartGame }) => {
  const [selectedOption, setSelectedOption] = useState('Quick match');

  const handleStartGame = () => {
    if (selectedOption) {
        onStartGame(selectedOption);
    }
  };


  return (
    <div>   
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content">

              {/* ***** Banner Start ***** */}
              <div className="main-banner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 d-flex align-items-center">
                      <div className="header-text" style={{width: "450px"}}>
                        <h2>Afterlife Adventures</h2>
                        <h4>A <em>journey</em> of a lifetime twice!</h4>
                        <div className="main-button">
                          <a  onClick={handleStartGame}>Play now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** Banner End ***** */}


              {/* ***** Show Firebase interaction ***** */}
              <ShowFirebase />
              {/* ***** Find matches End ***** */}
              
              
              </div>
            </div>
          </div>
        </div>
        
        <Footer/>  
    </div>
  )
}

export default MainPage;