import React from 'react'
import { VscAccount } from "react-icons/vsc";

function Header() {
    return (
        <div>
            <header className="header-area header-sticky">
              <div className="container">
                  <div className="row">
                      <div className="col-20">
                          <nav className="main-nav">
                              {/* ***** Logo Start ***** */}
                              <a href="index.html" className="logo" style={{marginLeft: "30px"}}>                             
                                <img src="assets/images/Logo.png" alt="" style={{height: "60px", width: "auto" }}/>
                              </a>
                              {/* ***** Logo End ***** */}
                              {/* ***** Search End ***** */}
                              {/* <div className="search-input">
                              <form id="search" action="#">
                                  <input type="text" placeholder="Type Into Me" id='searchText' name="searchKeyword" onkeypress="handle" />
                                  <i className="fa fa-search"></i>
                              </form>
                              </div> */}
                              {/* ***** Search End ***** */}
                              {/* ***** Menu Start ***** */}
                              <ul className="nav">
                                  <li><a href="#modes" >Play Modes</a></li>
                                  <li><a href="#create">Create Room</a></li>
                                  <li><a href="#find">Find Room</a></li>
                                  <li><a href="#features">Features</a></li>
                                  <li><a href="#rules">Rules</a></li>
                                  <li><a href="login">Login <VscAccount/></a></li>
                              </ul>
                              <a className='menu-trigger'>
                                  <span>Menu</span>
                              </a>
                              {/* ***** Menu End ***** */}
                          </nav>
                      </div>
                  </div>
                </div>
          </header>  
        </div>
    )
}

export default Header 