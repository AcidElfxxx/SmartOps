import React from 'react'
import { state, setState, useState, handleClick } from 'react'
import './Navbar.css'
import { MenuItems } from './MenuItems'
//import { MenuItem } from MenuItems

const Navbar = () => {
    // state = { clicked: false }

    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }

    return (
        <nav className="NavbarItems">
            <div className='logoWrapper'>
                <div className='logo'><img src="../Assets/logo.png" alt="freq"></img></div>
                <h1 className="navbar-logo">Chatter</h1>
            </div>
            {/* <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div> */}
            {/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> */}
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}

            </ul>
        </nav>
    )
}

export default Navbar