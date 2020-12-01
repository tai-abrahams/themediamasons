import React from 'react'
import MMlogo from '../img/MM_logo.png'

const Header = () => {
    return (
        <div className="container-fluid pt-3 pb-3 bg-white border">
            <img src={MMlogo} className="w-50" alt="Media Masons" style={{objectFit:"contain", maxWidth:'400px'}}/>
        </div>
    )
}

export default Header;
