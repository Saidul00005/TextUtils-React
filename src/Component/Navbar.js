import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg bg-body-${props.Mode}`}>
            <div className="container-fluid">
                    <Link className="navbar-brand" style={{color: (props.Mode === "dark")?"white":(props.Mode === "light")?"black":"green"}} to="/"><strong>{props.title}</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" style={{color: (props.Mode === "dark")?"white":(props.Mode === "light")?"black":"green"}} aria-current="page" to="/"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style={{color: (props.Mode === "dark")?"white":(props.Mode === "light")?"black":"green"}} to="/about"><strong>{props.aboutText}</strong></Link>
                        </li>
                    </ul>
            {/* <div className={`form-check form-switch text-${props.Mode==='light'?"black":"white"}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div> */}

            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" onClick={props.changeDark} style={{backgroundColor:"#33373e",color:"white"}} className="btn btn-primary"><strong>Dark Mode</strong></button>
                <button type="button" onClick={props.changeGolden} style={{backgroundColor:"#fac848",color:"black"}} className="btn btn-primary"><strong>Golden Color Mode</strong></button>
                <button type="button" onClick={props.changeLight} style={{backgroundColor:"white",color:"black"}} className="btn btn-primary"><strong>Light Mode</strong></button>
            </div>

            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
            </div>
            </nav>
    
    </>
)
    
   
}

Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired};

Navbar.defaultProps = {
    title :"Set title here",
    aboutText: "About text"
}


      