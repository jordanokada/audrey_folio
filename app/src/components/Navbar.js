// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import './navbar.css'

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">
//           {/* Replace with your site name or leave blank */}
//           <span>Audrey Geer</span>
//         </div>
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           {/* Unicode hamburger icon */}
//           <span style={{ fontSize: "2rem", cursor: "pointer" }}>&#9776;</span>
//         </div>
//         <div className={`nav-elements  ${showNavbar && 'active'}`}>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/workexperience">Work Experience</NavLink>
//             </li>
//             <li>
//               <NavLink to="/academicwork">Academic Work</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <span>Audrey Geer</span>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <span style={{ fontSize: "2rem", cursor: "pointer" }}>&#9776;</span>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="dropdown">
              <NavLink to="/workexperience">Work Experience</NavLink>
              <ul className="dropdown-menu">
                <li> <NavLink to="/workexperience/job1">Job 1</NavLink> </li>
                <li> <NavLink to="/workexperience/job2">Job 2</NavLink> </li>
                <li> <NavLink to="/workexperience/job3">Job 3</NavLink> </li>
              </ul>
            </li>
            <li>
              <NavLink to="/academicwork">Academic Work</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar