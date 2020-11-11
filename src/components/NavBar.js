import React from 'react'
import Button from './Button'


const NavBar = ({buttons}) => {
    return (
        <div className="container-fluid d-flex w-100 bg-gradient-light border-top border-bottom align-center">
            <div className="d-flex row w-75 ml-5 justify-content-start pl-0">
                {
                buttons.map((button)=>(
                    <div key={button.path} className="d-flex w-25 justify-content-start p-0">
                        <Button btn={button} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default NavBar;
