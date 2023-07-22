import React from 'react'

import PropTypes from 'prop-types';






export default function Navbar(props) {

  return (
    
    <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link  active " aria-current="page" href="#">Home</a>
          </li>
          
          
          
        </ul>
        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input "onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">enable darkmode</label>
</div>
        
      </div>
    </div>
   </nav>
   </>
    
      
    
  )
  
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired //we ara not set title it will thorow error because of isrequired
  };                                   // if only there is no default prosps set
  

// Navbar.defaultProps={
//     title:"set the Title here",
//     About:"set the About here"
// }


