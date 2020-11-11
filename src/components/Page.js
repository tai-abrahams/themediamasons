import React from 'react'
import { Link } from 'react-router-dom'

const Page = ({content}) => {

    const { text, thumbnail, column, portfolioColumn } = content;

    return (
        <div className="container-fluid d-flex mb-0 vh-100" style={{backgroundColor:"#240e0e"}}>
        <div className="d-flex row justify-content-md-center w-75 ml-5 text-white pt-5">
                                    {/* home page content */}
        {
        text ?
        text
        : null
        }
                                {/* Portfolio page content */}
        {
            thumbnail ?
            thumbnail.map(({id, img, path} )=>(
                <div key={id} className="w-25 mr-2">
                    <Link to={path}><img src={img} className="w-100" alt="thumbnail" /></Link>
                    </div>
            ))
            : null
        }
                                {/* Services page content */}
        {
            column ?
            column.map(({title, text})=>(
                <div className="w-50 pr-5" key={title}>
                    <div className="mb-4">
                        <h3>{title}</h3>
                    </div>
                    <div>
                        {text}
                    </div>
                </div>
            ))
            : null
        }
                                {/* portfolio item page */}
        {
            portfolioColumn ?
            portfolioColumn.map(({title, description, source, img})=>(
                <div className="d-flex w-50">
                    {
                        title && description ?
                        <div className="d-flex flex-column mb-4 pl-3 pr-3 w-100">
                            <div className="">
                                {title}
                            </div>
                            <div className="">
                                {description}
                            </div>
                            </div>
                            : null
                    }
                    {
                        img ?
                        <div className="d-flex mb-4">
                          <img src = {img} alt="website preview" className="w-100" />  
                        </div>
                        : null
                    }
                    
                </div>
            ))
            : null
        }
        </div>
        </div>
    )
}

export default Page;
