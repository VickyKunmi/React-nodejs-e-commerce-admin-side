import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Sidebar } from './SideBar'
import "./Navbar.css"
import { IconContext } from 'react-icons'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)


  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>

    <div className='navbar'>
       <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
      <Link to="#" className='logout'>
        <FaIcons.FaPowerOff />
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {Sidebar.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span className='span'>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar