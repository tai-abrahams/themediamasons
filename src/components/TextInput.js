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
        <div className="form-group">
            <li className="pl-0 pb-2 d-flex w-100">
                <label htmlFor={labelFor} className="col-sm-4">{label}</label>
                    <input
                    disabled={disable}
                        value={value}
                        type={type}
                        className={ classnames("col-sm-8 form-control", {'border-danger': error})}
                        id={id}
                        name={name}
                        onChange={onChange}
                        required={required}
                    />
                </li>
                { error && <div className="invalid-tooltip">{error}</div>}
        </div>
    )
}

export default TextInput
