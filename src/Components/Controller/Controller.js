import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Controller extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            start: true,
            pause: false,
            reset: false,
            lap: false
        }
    }

    startHandler() {
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true,
            reset: false
        })
        this.props.start()
    }

    pauseHandler() {
        this.setState(
            {
                ...this.state,
                start: true,
                lap: false,
                reset: true,
                pause: false
            }
        )
        this.props.pause()
    }

    lapHandler() {

        this.props.lap()
    }

    resetHandler() {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: false
        })
        this.props.reset()
    }

    render() {

        let output;

        if (this.state.start && !this.state.reset) {
            output = (
                <div className = 'text-left'>
                    <button className='btn btn-success btn-lg' onClick={() => this.startHandler()}>Start</button>
                </div>
            )
        } else if (this.state.pause && this.state.lap) {
            output = (
                <div className='text-left'>
                    <button className='btn btn-primary btn-lg mr-5' onClick={() => this.pauseHandler()}>Pause</button>
                    <button className='btn btn-warning btn-lg ml-5 px-4' onClick={() => this.lapHandler()}>Lap</button>
                </div>
            )
        } else if (this.state.start && this.state.reset) {
            output = (
                <div className='text-left'>
                    <button className='btn btn-success btn-lg mr-5' onClick={() => this.startHandler()} >Start</button>
                    <button className='btn btn-danger btn-lg ml-5' onClick={() => this.resetHandler()}>Reset</button>
                </div>
            )
        }

        return (
            <div className='mt-5'>
                {output}
            </div>
        )
    }
}

export default Controller