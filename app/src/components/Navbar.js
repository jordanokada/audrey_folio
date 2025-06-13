import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import resume from '../assets/resume.pdf'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">Audrey Geer</NavLink>
          {/* <span>Audrey Geer</span> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <span style={{ fontSize: "2rem", cursor: "pointer" }}>&#9776;</span>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="dropdown">
              <NavLink to="/workexperience">Work Experience</NavLink>
              <ul className="dropdown-menu">
                <li> <NavLink to="/workexperience/legislativeaid">Legislative Aid</NavLink> </li>
                <li> <NavLink to="/workexperience/marketinginternship">Marketing Internship</NavLink> </li>
                <li> <NavLink to="/workexperience/craftservices">Craft Services</NavLink> </li>
              </ul>
            </li>
            <li>
              <NavLink to="/academicwork">Academic Work</NavLink>
            </li>
            <li> <a href={resume} target="_blank" rel="noopener noreferrer download">Resume</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar