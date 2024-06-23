import React from 'react'

const Footer = () => {  
  const currentYear = new Date().getFullYear();

    return (
        <div>
          <footer>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p>Copyright © {currentYear} <a href="#">JMK Gaming</a> Company. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </footer>  
        </div>
    )
}

export default Footer