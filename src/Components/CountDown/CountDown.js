import React from 'react'
import Digit from './Digit/Digit'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const CountDown = (props) => {
    return (
        <div className='d-flex pt-3'>
            <Digit className='col' value={props.time.min} />
            <Digit className='col' value={props.time.sec} />
            <Digit className='col' value={props.time.mili} />
        </div>
    )
}

export default CountDown