import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Laps = (props) => {

    return (
        <div className = 'text-left'>
            <ul className="list-group list-group-flush">
                {props.laps.map((lap, index) => {
                    return (
                        <li key={index} className="list-group-item pl-0">
                            <h4>
                                <span className="text-dark">Minute: </span>
                                <span className="text-danger">{lap.min} </span>
                                <span className="text-dark">Second: </span>
                                <span className="text-danger">{lap.sec} </span>
                                <span className="text-dark">Mili: </span>
                                <span className="text-danger">{lap.mili}</span>
                            </h4>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Laps