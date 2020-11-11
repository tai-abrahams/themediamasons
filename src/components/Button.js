import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btn}) => {
    return (
        <div className="pl-0">
           <Link to={btn.path} >{btn.name}</Link>
        </div>
    )
}

export default Button;
