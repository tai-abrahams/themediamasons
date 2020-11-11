import React from 'react'
import '../css/Notify.css'
export const Notify = ({success}) => {
    return (
        <div className="d-flex col-md-12 justify-content-end mt-4">
            <div className="d-flex fade-in justify-content-center col-md-10">
            <div className="d-flex justify-content-center col-md-5 p-0 rounded bg-success">{success ? "Successfully Submitted" : null}</div>
            </div>
        </div>
    )
}

export default Notify;
