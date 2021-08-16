import React from 'react'
import "./Nav.css"
import logo from "./images/netflix_logo.jpg"
import avatar from "./images/user_avatar.jpg"

function Nav() {
    return (
        <div className="Nav">
            <img 
                className="nav__logo"
                src={logo}
                alt="Netflix Logo"
            />
            <img 
                className="nav__user"
                src={avatar}
                alt="User Avatar"
            />
        </div>
    )
}

export default Nav
