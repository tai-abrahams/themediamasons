import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import TextInput from './TextInput';
import Notify from './Notify'

const serverURL = "https://www.tai-abrahams.github.io/mediamasons-server/log"

const Contact = ({props, content}) => {

    const [ allValues, setAllValues ] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        message: '',
        error: {}
    });

    const postMessage = ( formQuery ) => {
        // eslint-disable-next-line no-unused-vars
        const res = axios.post(process.env.REACT_APP_LOG || serverURL, formQuery)
    }

    const [submit, setSubmit] = useState(null);
    
    let history = useHistory();

    const onSubmit = (e, dispatch) => {
        e.preventDefault()
        //check the fields arent empty

        if(allValues.name === '') {
            setAllValues({...allValues, error:{name: 'Missing input'}});
            console.log(allValues)
            return;
        }

        if(allValues.city === '') {
            setAllValues({...allValues, error:{city: 'Missing input'}});
            console.log(allValues)
            return;
        }

        if(allValues.email === '') {
            setAllValues({...allValues, error:{email: 'Missing input'}});
            console.log(allValues)
            return;
        }

        if(allValues.phone === '') {
            setAllValues({...allValues, error:{phone: 'Missing input'}});
            console.log(allValues)
            return;
        }

        if(allValues.company === '') {
            setAllValues({...allValues, error:{company: 'Missing input'}});
            console.log(allValues.error)
            return;
        }

        if(allValues.website === '') {
            setAllValues({...allValues, error:{website: 'Missing input'}});
            console.log(allValues)
            return;
        }

        if(allValues.company === '') {
            setAllValues({...allValues, error:{email: 'Missing input'}});
            console.log(allValues)
            return;
        }

        const sendMessage = {
            allValues
        }

        postMessage(sendMessage)

        //reset values
        setAllValues({...allValues,
            name: '',
            city: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            message: '',
            error: ''
        }) 
        setSubmit(true);

        setInterval(function(){history.push('/')}, 3000)

    }

    const onChange = (e) =>{
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    const disable = ()=>{
        if(submit === true){
            return true
        } else {
            return false
        }
    }



    return (
        <div className="container col-12 pb-5" style={{backgroundColor: "#240e0e"}}>
    
                <form className="row needs-validation mt-5 p-0 col-12 col-md-6 ml-auto mr-auto" onSubmit={onSubmit}>
                
                            <ul className="col-12 col-sm-8 col-md-6 p-0 ml-auto mr-auto mb-0">
                                <TextInput 
                                    name="name"
                                    label="name"
                                    labelFor='validationTooltip01'
                                    id="validationTooltip01"
                                    value={allValues.name}
                                    onChange={onChange}
                                    error={allValues.error.name}
                                    required={true}
                                    disable={disable()}
                                />
                               <TextInput 
                                    name="city"
                                    label="city"
                                    labelFor='validationTooltip02'
                                    id="validationTooltip02"
                                    value={allValues.city}
                                    onChange={onChange}
                                    error={allValues.error.city}
                                    required={true}
                                    disable={disable()}
                                />
                                <TextInput 
                                    name="email"
                                    label="email"
                                    labelFor='validationTooltip03'
                                    id="validationTooltip03"
                                    value={allValues.email}
                                    onChange={onChange}
                                    error={allValues.error.email}
                                    required={true}
                                    disable={disable()}
                                />
                            </ul>
                            
                            <ul className="col-12 col-sm-8 col-md-6 p-0 mb-auto mr-auto ml-auto">
                                <TextInput 
                                    name="phone"
                                    label="phone"
                                    labelFor='validationTooltip04'
                                    id="validationTooltip04"
                                    value={allValues.phone}
                                    onChange={onChange}
                                    error={allValues.error.phone}
                                    required={true}
                                    disable={disable()}
                                />
                                <TextInput 
                                    name="company"
                                    label="company"
                                    labelFor='validationTooltip05'
                                    id="validationTooltip05"
                                    value={allValues.company}
                                    onChange={onChange}
                                    error={allValues.error.company}
                                    required={false}
                                    disable={disable()}
                                />
                                <TextInput 
                                    name="website"
                                    label="website"
                                    labelFor='validationTooltip06'
                                    id="validationTooltip06"
                                    value={allValues.website}
                                    onChange={onChange}
                                    error={allValues.error.website}
                                    required={false}
                                    disable={disable()}
                                />
                            </ul>
                    
                    <div className="col-12 col-sm-8 col-md-12 p-0 m-0 ml-auto mr-auto">
                                <textarea
                                    value={allValues.message}
                                    name='message'
                                    className="col-sm-12 rounded"
                                    style={{height:"200px"}}
                                    placeholder="Tell us what you're looking for..."
                                    onChange={onChange}
                                    disabled={disable()}
                                    />
                    </div>
                    {
                        submit && <Notify success={submit} />
                    }
                    <div className="container col-12 col-sm-8 col-md-12 p-0 mr-auto ml-auto text-right">
                    
                    <input type="submit" disabled={disable()} className="btn btn-light bg-light col-12 col-md-3" />
                    
                    </div>
                </form>
            
        </div>
    )
}


export default Contact
