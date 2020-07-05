import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Digit.css'

const Digit =(props)=> {
    return (
        <div className = 'Digit mr-4'>
            <h2 className = 'display-2 py-3'>{ props.value<10 ? `0${props.value}`: props.value }</h2>
        </div>
    )
}

export default Digit