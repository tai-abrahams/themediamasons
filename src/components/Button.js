import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btn}) => {
    return (
        <li className="nav-item active mt-auto mb-auto">
           <a href={btn.path} className="nav-link text-primary pl-5 pr-5 text-center">{btn.name}</a>
        </li>
    )
}

export default Button;
