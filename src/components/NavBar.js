import React from 'react'
import Button from './Button'
import Link from 'react-router-dom'


const NavBar = () => {

    const navbuttons = [
        {
          name: 'Home',
          path: '/'
        }, {
          name:'Services',
          path:'/services'
        }, {
          name: 'Portfolio',
          path: '/portfolio'
        }, {
          name: 'Contact Us',
          path: '/contact'
        }
      ]
    return (
        <nav className="navbar navbar-expand-sm navbar-nav  navbar-light bg-gradient-light border border-top pt-2 pb-2">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
            {
                navbuttons.map((button)=>(
                        <Button btn={button} />
                ))
                }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
