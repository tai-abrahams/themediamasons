import React from 'react'
import { Link } from 'react-router-dom'

const Page = ({content}) => {

    const { text, thumbnail, column, portfolioColumn } = content;
     const pagetxt = (text) => { return text.split('\n').map(str => <p>{str}</p>)}
    return (
        <div className="container ml-auto mr-auto p-0 pb-5 col-12" style={{backgroundColor:"#240e0e"}}>
        <div className="row col-md-9 col-10 text-white ml-auto mr-auto mt-5 mb-5 p-0 pl-auto">
                                    {/* home page content */}
        {
        text ?
        pagetxt(text)
        : null
        }
                                {/* Portfolio page content */}
        {
            thumbnail ?
            thumbnail.map(({id, img, path, title} )=>(
                <div key={id} className="col-10 col-sm-6 col-md-4 mr-auto ml-auto mb-4">
                <Link to={path}><img src={img} className="col-12" alt="thumbnail" /></Link>
            <div className="col-12 text-center">{title}</div>
                </div>
            ))
            : null
        }
                                {/* Services page content */}
        {
            column ?
            column.map(({title, text})=>(
                
                <div className="col-12 col-lg-6 ml-auto mr-auto p-0 text-left mb-4 pl-3 pr-3" key={title}>
                    
                    <div className="mb-1">
                        <h3>{title}</h3>
                    </div>
                    <div className="">
                        {pagetxt(text)}
                    </div>
                </div>
            ))
            : null
        }
                                {/* portfolio item page */}
        {
            portfolioColumn ?
            portfolioColumn.map(({title, description, source, img})=>(
                <div className="row col-12 col-md-6 p-0">
                    {
                        title && description ?
                        <div className="col-11 p-0 ">
                        
                            <h3 className="col-12 p-0">{title}</h3>
                            
                            <div className="col-12 p-0 mb-4">
                                {description}
                            </div>
                        </div>
                        : null
                    }
                    {
                        img ?
                        <div className="col-12">
                          <img src = {img} alt="site preview" className="w-100" />  
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
