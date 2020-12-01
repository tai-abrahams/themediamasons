import React from 'react'
import classnames from 'classnames'

const TextInput = ({
    label,
    labelFor,
    id,
    name,
    value,
    type,
    onChange,
    error,
    required,
    disable
}) => {
    return (
        <div className="form-group p-0 mt-0 mb-0">
            <li className="col-12 m-0 mb-2 p-0">
                {/*<label htmlFor={labelFor} className="col-12">{label}</label>*/}
                    <input
                    disabled={disable}
                        value={value}
                        type={type}
                        className="col-12 pt-3 pb-3"
                        id={id}
                        name={name}
                        onChange={onChange}
                        required={required}
                        placeholder={name}
                    />
                </li>
                { error && <div className="invalid-tooltip">{error}</div>}
        </div>
    )
}
//{ classnames("col-12 pt-auto pb-auto text-dark form-control border border-primary", {'border-danger': error})}
export default TextInput
